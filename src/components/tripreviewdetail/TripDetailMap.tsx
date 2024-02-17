import { useEffect, useState } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

function TripDetailMap() {
  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=700d399006256f95732f06b19c046ba5&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        var container = document.getElementById("map");
        var options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        var map = new window.kakao.maps.Map(container, options);

        var positions = [
          {
            title: "카카오",
            latlng: new window.kakao.maps.LatLng(33.450705, 126.570677),
          },
          {
            title: "생태연못",
            latlng: new window.kakao.maps.LatLng(33.450936, 126.569477),
          },
          {
            title: "텃밭",
            latlng: new window.kakao.maps.LatLng(33.450879, 126.56994),
          },
          {
            title: "근린공원",
            latlng: new window.kakao.maps.LatLng(33.451393, 126.570738),
          },
        ];

        for (var i = 0; i < positions.length; i++) {
          // 마커를 생성합니다
          var marker = new window.kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          });
        }
      });
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, []);

  return (
    <main className="w-full flex flex-col items-center justify-center ">
      <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <div id="map" style={{ width: "100%", height: "100%" }}></div>
      </div>
    </main>
  );
}

export default TripDetailMap;
