import { useTripPlaceStore } from "@/store/useTripPlaceStore";
import { useViewPlanStore } from "@/store/useViewPlanStore";
import { debounce } from "@/utils/debounce";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

function TripEditMap() {
  const { place, setPlace } = useTripPlaceStore();
  const [viewPlanItems, setViewPlanItems] = useState<any[] | undefined>();
  const [mapPlace, setMapPlace] = useState<string[]>([]);
  const [mapLatLngArray, setMapLatLngArray] = useState<any[]>([]);
  const { viewPlanStates, setViewPlanStates } = useViewPlanStore();

  useEffect(() => {
    const testTripPlan = [
      { places: ["새별오름", "성산일출봉", "카멜리아 힐"] },
      { places: ["오설록", "스누피가든", "용머리해안"] },
      { places: ["금오름", "쇠소깍", "정방폭포"] },
    ];
    setPlace(testTripPlan.map((item) => item.places));
  }, []);

  useEffect(() => {
    setMapPlace(place.flatMap((item) => item));
  }, [place, setPlace]);

  useEffect(() => {
    setViewPlanItems(
      viewPlanStates.map((item, index) => item === true && place[index]),
    );
  }, [viewPlanStates]);

  useEffect(() => {
    setMapLatLngArray(mapLatLngArray);
  }, [mapLatLngArray, setMapLatLngArray]);

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

        var marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });

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
        /* -------------------------------------------------------------------------- */
        const updateCenter = debounce((latitude, longitude) => {
          map.panTo(new window.kakao.maps.LatLng(latitude, longitude));
        }, 300);
        var geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          "제주",
          function (result: { x: any; y: any }[], status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              var coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x,
              );

              const categoryOptions = {
                location: coords,
                radius: 10000,
              };

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          },
        );

        /* -------------------------------------------------------------------------- */

        var infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
        const combinedArray = mapPlace.map((place, index) => {
          return {
            place,
            latLng: mapLatLngArray[index],
          };
        });
        // var keywords = ["성산일출봉", "새별오름", "하얏트 제주"];
        var ps = new window.kakao.maps.services.Places();
        if (viewPlanItems?.some(Array.isArray) === true) {
          viewPlanItems.map((item) => {
            for (var i = 0; i < item.length; i++) {
              ps.keywordSearch(item[i], placesSearchCB);
              console.log(item);
            }
          });
        }

        function placesSearchCB(
          data: string | any[],
          status: any,
          pagination: any,
        ) {
          if (status === window.kakao.maps.services.Status.OK) {
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            var bounds = new window.kakao.maps.LatLngBounds();
            for (var i = 0; i <= 0; i++) {
              displayMarker(data[i]);
              bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
            }
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds);
          }
        }

        function displayMarker(place: { y: any; x: any; place_name: string }) {
          // 마커를 생성하고 지도에 표시합니다
          var marker = new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(place.y, place.x),
          });

          setMapLatLngArray((prevArray) => [
            ...prevArray,
            new window.kakao.maps.LatLng(place.y, place.x),
          ]);

          // 마커에 클릭이벤트를 등록합니다
          window.kakao.maps.event.addListener(marker, "click", function () {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent(
              '<div style="padding:5px;font-size:12px;">' +
                place.place_name +
                "</div>",
            );
            infowindow.open(map, marker);
          });
        }

        console.log(viewPlanItems);
        console.log(mapLatLngArray);

        // 지도에 표시할 선을 생성합니다
        const updateMapWithPolyline = () => {
          // 지도에 표시할 선을 생성합니다
          var first_linePath = new window.kakao.maps.Polyline({
            path: mapLatLngArray, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 3, // 선의 두께 입니다
            strokeColor: "#63D4F2", // 선의 색깔입니다
            strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: "solid", // 선의 스타일입니다
          });

          // 지도에 선을 표시합니다
          first_linePath.setMap(map);
        };
        updateMapWithPolyline();
        setMapLatLngArray([]);
      });
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, [mapPlace, viewPlanItems]);

  return (
    <main className="w-full flex flex-col items-center justify-center ">
      <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <div id="map" style={{ width: "100%", height: "100%" }}></div>
      </div>
    </main>
  );
}

export default TripEditMap;
