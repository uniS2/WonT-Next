import { useEffect, useState } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

function TripEditMap() {
  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=700d399006256f95732f06b19c046ba5&autoload=false&libraries=services`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        var container = document.getElementById("map");
        var options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        var map = new window.kakao.maps.Map(container, options);

        // var marker = new window.kakao.maps.Marker({
        //   // 지도 중심좌표에 마커를 생성합니다
        //   position: map.getCenter(),
        // });

        var marker = new window.kakao.maps.Marker(), // 클릭한 위치를 표시할 마커입니다
          infowindow = new window.kakao.maps.InfoWindow({ zindex: 1 }); // 클릭한 위치에 대한 주소를 표시할 인포윈도우입니다

        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: { latLng: any }) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            var latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            var message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
            message += "경도는 " + latlng.getLng() + " 입니다";

            console.log(message);
          },
        );

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          "제주특별자치도 제주시 첨단로 242",
          function (result: { x: any; y: any }[], status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              var coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x,
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              var marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              var infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>',
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          },
        );

        /* -------------------------------------------------------------------------- */

        // if (navigator.geolocation) {
        //   // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        //   navigator.geolocation.getCurrentPosition(function (position) {
        //     var lat = position.coords.latitude, // 위도
        //       lon = position.coords.longitude; // 경도

        //     var locPosition = new window.kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
        //       message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다

        //     // 마커와 인포윈도우를 표시합니다
        //     displayMarker(locPosition, message);
        //   });
        // } else {
        //   // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

        //   var locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667),
        //     message = "geolocation을 사용할수 없어요..";

        //   displayMarker(locPosition, message);
        // }

        // function displayMarker(locPosition: any, message: string) {
        //   // 마커를 생성합니다
        //   var marker = new window.kakao.maps.Marker({
        //     map: map,
        //     position: locPosition,
        //   });

        //   var iwContent = message, // 인포윈도우에 표시할 내용
        //     iwRemoveable = true;

        //   // 인포윈도우를 생성합니다
        //   var infowindow = new window.kakao.maps.InfoWindow({
        //     content: iwContent,
        //     removable: iwRemoveable,
        //   });

        //   // 인포윈도우를 마커위에 표시합니다
        //   infowindow.open(map, marker);

        //   // 지도 중심좌표를 접속위치로 변경합니다
        //   map.setCenter(locPosition);
        // }
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

export default TripEditMap;
