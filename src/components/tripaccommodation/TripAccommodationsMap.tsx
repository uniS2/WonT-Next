import { useEffect, useRef, useState } from "react";
import { TOUR_BASE_ACCOMMODATION } from "@/lib/tour/tour";
import { RegionStore } from "@/store/RegionStore";
import { AccommodationsStore } from "@/store/AccommodationsStore";

declare global {
  interface Window {
    kakao: any;
  }
}

const TripAccommodationMap = () => {
  const { locationAccommodations, setLocationAccommodations } =
    AccommodationsStore();
  const { selectedRegionName } = RegionStore();
  const mapRef = useRef<HTMLDivElement>(null);
  const [location, setLocation] = useState([126.9837456304, 37.563446366]);
  const [map, setMap] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${TOUR_BASE_ACCOMMODATION}&mapX=${location[0]}&mapY=${location[1]}`,
      );
      const json = await response.json();
      setLocationAccommodations(json.response.body.items.item);
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
          level: 6,
        };

        const newMap = new window.kakao.maps.Map(mapRef.current, options);

        //# 1. 현재 위치 업데이트
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

        //# 3. 검색 장소 위치 기준으로 지도 범위 재설정
        /* const bounds = new window.kakao.maps.LatLngBounds();
        if (locationAccommodation) {
          for (let i = 0; i < locationAccommodation.length; i++) {
            bounds.extend(
              new window.kakao.maps.LatLng(
                locationAccommodation[i].mapy,
                locationAccommodation[i].mapx,
              ),
            );
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds); */
      });
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, []);

  useEffect(() => {
    //# 2. 숙박 카테고리 지도 표시
    const imageSrc = "https://cdn-icons-png.flaticon.com/512/4324/4324725.png";

    if (locationAccommodations && map) {
      for (let i = 0; i < locationAccommodations.length; i++) {
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
            locationAccommodations[i].mapy,
            locationAccommodations[i].mapx,
          ),
          title: locationAccommodations[i].title,
          image: markerImage,
        });

        marker.setMap(map);
      }
    }
  }, [locationAccommodations, map]);

  return <div ref={mapRef} className="w-full h-[31.8125rem]" />;
};

export default TripAccommodationMap;
