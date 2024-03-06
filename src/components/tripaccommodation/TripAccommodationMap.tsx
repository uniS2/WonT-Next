import { useEffect, useState } from "react";
import { TOUR_BASE_ACCOMMODATION } from "@/lib/tour/tour";
import { RegionStore } from "@/store/RegionStore";
import { debounce } from "@/utils/debounce";

declare global {
  interface Window {
    kakao: any;
  }
}

type RegionDataType = {
  addr1: string;
  addr2: string;
  areacode: number;
  booktour: string;
  cat1: string;
  cat2: string;
  cat3: string;
  contentid: number;
  contenttypeid: number;
  cpyrthDivCd: string;
  createdtime: number;
  firstimage: string;
  firstimage2: string;
  mapx: number;
  mapy: number;
  mlevel: number;
  modifiedtime: number;
  sigungucode: number;
  tel: string;
  title: string;
  zipcode: number;
};

const TripAccommodationMap = () => {
  const [regionData, setRegionData] = useState<RegionDataType[] | null>(null);
  const { selectedRegionCode, selectedRegionName } = RegionStore();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${TOUR_BASE_ACCOMMODATION}&areaCode=${selectedRegionCode}`,
      );
      const json = await response.json();
      setRegionData(json.response.body.items.item);
      console.log(selectedRegionCode, regionData);
    })();
  }, [selectedRegionCode]);

  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_MAP_KEY}&autoload=false&libraries=services`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        var container = document.getElementById("map");
        var options = {
          center: new window.kakao.maps.LatLng(
            37.4812845080678,
            126.952713197762,
          ),
          level: 3,
        };

        var map = new window.kakao.maps.Map(container, options);

        //# 1. 현재 위치 업데이트
        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(
          selectedRegionName,
          function (result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x,
              );

              console.log(result);

              map.setCenter(coords);
            }
          },
        );

        //# 2. 숙박 카테고리 지도 표시
        var imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        if (regionData) {
          for (var i = 0; i < regionData.length; i++) {
            // 마커 이미지의 이미지 크기 입니다
            var imageSize = new window.kakao.maps.Size(24, 35);

            // 마커 이미지를 생성합니다
            var markerImage = new window.kakao.maps.MarkerImage(
              imageSrc,
              imageSize,
            );

            // 마커를 생성합니다
            var marker = new window.kakao.maps.Marker({
              map: map, // 마커를 표시할 지도
              position: new window.kakao.maps.LatLng(
                regionData[i].mapy,
                regionData[i].mapx,
              ), // 마커를 표시할 위치
              title: regionData[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
              image: markerImage, // 마커 이미지
            });
          }
        }

        var marker = window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        const updateCenter = debounce((latitude, longitude) => {
          map.panTo(new window.kakao.maps.LatLng(latitude, longitude));
        }, 300);
        // var geocoder = new window.kakao.maps.services.Geocoder();
      });
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, []);

  return (
    <main className="w-full">
      <div className="w-full h-[31.8125rem]">
        <div id="map" style={{ width: "100%", height: "100%" }} />
      </div>
    </main>
  );
};

export default TripAccommodationMap;
