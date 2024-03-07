import { useEffect, useRef, useState } from "react";
import { TOUR_BASE_ACCOMMODATION } from "@/lib/tour/tour";
import { RegionStore } from "@/store/RegionStore";
// import { AccommodationDataType } from "@/types/DataProps";
import { AccommodationStore } from "@/store/AccommodationStore";

declare global {
  interface Window {
    kakao: any;
  }
}

const TripAccommodationMap = () => {
  const { locationAccommodation, setLocationAccommodation } =
    AccommodationStore();
  // const [accommodationData, setAccommodationData] = useState<AccommodationDataType[] | null>(null);
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
      setLocationAccommodation(json.response.body.items.item);
      console.log(json.response.body.items.item);
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
    const imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    if (locationAccommodation) {
      for (let i = 0; i < locationAccommodation.length; i++) {
        //# 2.
        // 마커 이미지의 이미지 크기 입니다
        const imageSize = new window.kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: new window.kakao.maps.LatLng(
            locationAccommodation[i].mapy,
            locationAccommodation[i].mapx,
          ), // 마커를 표시할 위치
          title: locationAccommodation[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
        });

        marker.setMap(map);
      }
    }
  }, [locationAccommodation, map]);

  return <div ref={mapRef} className="w-full h-[31.8125rem]" />;
};

export default TripAccommodationMap;
