import { useEffect, useRef, useState } from "react";
import { TOUR_BASE_PLACE } from "@/lib/tour/tour";
import { PlacesStore } from "@/store/PlacesStore";
import { RegionStore } from "@/store/RegionStore";
import { AccommodationDataType } from "@/types/DataProps";

declare global {
  interface Window {
    kakao: any;
  }
}

const TripPlaceMap = () => {
  const { selectedRegionName } = RegionStore();
  const { locationPlaces, setLocationPlaces } = PlacesStore();
  const mapRef = useRef<HTMLDivElement>(null);
  const [location, setLocation] = useState([126.9837456304, 37.563446366]);
  const [map, setMap] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${TOUR_BASE_PLACE}&mapX=${location[0]}&mapY=${location[1]}`,
      );
      const json = await response.json();
      const data = json.response.body.items.item;
      setLocationPlaces(
        data.filter(
          (data: AccommodationDataType) =>
            data.contenttypeid != 25 && data.contenttypeid != 32,
        ),
      );
    })();
  }, [location]);

  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_MAP_KEY}&autoload=false&libraries=services`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const options = {
          center: new window.kakao.maps.LatLng(location[1], location[0]),
          level: 4,
        };

        const newMap = new window.kakao.maps.Map(mapRef.current, options);

        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(
          selectedRegionName || "부산",
          function (result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x,
              );
              setLocation([result[0].x, result[0].y]);

              newMap.setCenter(coords);
              setMap(newMap);
            }
          },
        );
      });
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, []);

  useEffect(() => {
    const imageSrc = "https://cdn-icons-png.flaticon.com/512/4249/4249601.png ";

    if (locationPlaces && map) {
      for (let i = 0; i < locationPlaces.length; i++) {
        const imageSize = new window.kakao.maps.Size(35, 35);
        const imageOption = { offset: new window.kakao.maps.Point(30, 35) };
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption,
        );

        const marker = new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(
            locationPlaces[i].mapy,
            locationPlaces[i].mapx,
          ),
          title: locationPlaces[i].title,
          image: markerImage,
        });

        marker.setMap(map);
      }
    }
  }, [locationPlaces, map]);

  return <div ref={mapRef} className="w-full h-[31.8125rem]" />;
};

export default TripPlaceMap;
