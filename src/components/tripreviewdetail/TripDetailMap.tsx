import { useEffect, useState } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

function TripEditMap() {
  const [address, setAddress] = useState("");
  const [roadAddress, setRoadAddress] = useState("");

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

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new window.kakao.maps.services.Geocoder();

        var marker = new window.kakao.maps.Marker(),
          infowindow = new window.kakao.maps.InfoWindow({ zindex: 1 });

        var drawingFlag = false;
        var moveLine: {
          setPath: (arg0: any[]) => void;
          setMap: (arg0: any) => void;
          getLength: () => number;
        } | null;
        var clickLine: {
          setMap: any;
          getPath: () => any;
          setPath: (arg0: any) => void;
          getLength: () => number;
        } | null;
        var distanceOverlay: {
          setPosition: (arg0: any) => void;
          setContent: (arg0: any) => void;
          setMap: (arg0: null) => void;
        } | null;
        var dots: { [key: string]: any } = {};

        searchAddrFromCoords(map.getCenter(), displayCenterInfo);

        // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: {
            latLng: { getLng: () => any; getLat: () => any };
          }) {
            searchDetailAddrFromCoords(
              mouseEvent.latLng,
              function (result, status) {
                if (status === window.kakao.maps.services.Status.OK) {
                  var detailAddr = !!result[0].road_address
                    ? "<div>도로명주소 : " +
                      result[0].road_address.address_name +
                      "</div>"
                    : "";

                  detailAddr +=
                    "<div>지번 주소 : " +
                    result[0].address.address_name +
                    "</div>";

                  var content =
                    '<div class="bAddr">' +
                    '<span class="title">법정동 주소정보</span>' +
                    detailAddr +
                    "</div>";

                  marker.setPosition(mouseEvent.latLng);
                  marker.setMap(map);

                  // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
                  infowindow.setContent(content);
                  infowindow.open(map, marker);

                  if (
                    result[0].road_address?.address_name !== null ||
                    result[0].address.address_name !== null
                  ) {
                    setRoadAddress(result[0].road_address?.address_name);
                    setAddress(result[0].address.address_name);
                  }
                }
              },
            );
          },
        );
        // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
        window.kakao.maps.event.addListener(map, "idle", function () {
          searchAddrFromCoords(map.getCenter(), displayCenterInfo);
        });

        function searchAddrFromCoords(
          coords: { getLng: () => any; getLat: () => any },
          callback: {
            (result: any, status: any): void;
            (result: any, status: any): void;
          },
        ) {
          // 좌표로 행정동 주소 정보를 요청합니다
          geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
        }

        function searchDetailAddrFromCoords(
          coords: { getLng: () => any; getLat: () => any },
          callback: (result: any, status: any) => void,
        ) {
          // 좌표로 법정동 상세 주소 정보를 요청합니다
          geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        }

        function displayCenterInfo(result: string | any[], status: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            var infoDiv = document.getElementById("centerAddr");

            for (var i = 0; i < result.length; i++) {
              if (result[i].region_type === "H" && infoDiv !== null) {
                infoDiv.innerHTML = result[i].address_name;

                break;
              }
            }
          }
        }

        /* -------------------------------------------------------------------------- */

        console.log("address", address);
        geocoder.addressSearch(
          address,
          function (
            result: {
              y: any;
              x: any;
            }[],
            status: any,
          ) {
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
        var first_positions = [
          {
            content: "<div>카카오 스페이스 닷원</div>",

            latlng: new window.kakao.maps.LatLng(
              33.45066473510417,
              126.57067214493566,
            ),
          },

          {
            content: "<div>제주 테크노파크 에너지융합센터</div>",

            latlng: new window.kakao.maps.LatLng(
              33.45076072887628,
              126.57236027708245,
            ),
          },

          {
            content: "<div>에이바우트 커피</div>",

            latlng: new window.kakao.maps.LatLng(
              33.452155848772605,
              126.57167582561753,
            ),
          },
        ];

        for (var i = 0; i < first_positions.length; i++) {
          // 마커를 생성합니다

          var marker = new window.kakao.maps.Marker({
            map: map, // 마커를 표시할 지도

            position: first_positions[i].latlng, // 마커의 위치// 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
          });

          // 마커에 표시할 인포윈도우를 생성합니다

          var infowindow = new window.kakao.maps.InfoWindow({
            content: first_positions[i].content, // 인포윈도우에 표시할 내용

            removable: true,
          });

          window.kakao.maps.event.addListener(
            marker,
            "click",
            marker_click(map, marker, infowindow),
          );
        }

        function marker_click(
          map: any,
          marker: any,
          infowindow: { open: (arg0: any, arg1: any) => void },
        ) {
          return function () {
            infowindow.open(map, marker);
          };
        }

        // 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다

        var first_polyline = [
          new window.kakao.maps.LatLng(33.45066473510417, 126.57067214493566),

          new window.kakao.maps.LatLng(33.45076072887628, 126.57236027708245),

          new window.kakao.maps.LatLng(33.452155848772605, 126.57167582561753),
        ];

        // 지도에 표시할 선을 생성합니다

        var first_linePath = new window.kakao.maps.Polyline({
          path: first_polyline, // 선을 구성하는 좌표배열 입니다

          strokeWeight: 3, // 선의 두께 입니다

          strokeColor: "#63D4F2", // 선의 색깔입니다

          strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다

          strokeStyle: "solid", // 선의 스타일입니다
        });

        // 지도에 선을 표시합니다

        first_linePath.setMap(map);

        /* -------------------------------------------------------------------------- */

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: { latLng: any }) {
            var clickPosition = mouseEvent.latLng;

            if (!drawingFlag) {
              drawingFlag = true;

              deleteClickLine();

              deleteDistnce();

              deleteCircleDot();

              clickLine = new window.kakao.maps.Polyline({
                map: map,
                path: [clickPosition],
                strokeWeight: 3,
                strokeColor: "#db4040",
                strokeOpacity: 1,
                strokeStyle: "solid",
              });

              // 선이 그려지고 있을 때 마우스 움직임에 따라 선이 그려질 위치를 표시할 선을 생성합니다
              moveLine = new window.kakao.maps.Polyline({
                strokeWeight: 3,
                strokeColor: "#db4040",
                strokeOpacity: 0.5,
                strokeStyle: "solid",
              });

              // 클릭한 지점에 대한 정보를 지도에 표시합니다
              displayCircleDot(clickPosition, 0);
            } else {
              var path = clickLine?.getPath();

              path.push(clickPosition);

              clickLine?.setPath(path);

              var distance = Math.round(clickLine!.getLength());
              displayCircleDot(clickPosition, distance);
            }
          },
        );

        // 선을 그리고있는 상태에서 마우스무브 이벤트가 발생하면 그려질 선의 위치를 동적으로 보여주도록 합니다
        window.kakao.maps.event.addListener(
          map,
          "mousemove",
          function (mouseEvent: { latLng: any }) {
            if (drawingFlag) {
              var mousePosition = mouseEvent.latLng;

              var path = clickLine?.getPath();

              var movepath = [path[path.length - 1], mousePosition];
              moveLine?.setPath(movepath);
              moveLine?.setMap(map);

              var distance = Math.round(
                  clickLine!.getLength() + moveLine!.getLength(),
                ),
                content =
                  '<div class="dotOverlay distanceInfo">총거리 <span class="number">' +
                  distance +
                  "</span>m</div>";

              showDistance(content, mousePosition);
            }
          },
        );

        // 지도에 마우스 오른쪽 클릭 이벤트를 등록합니다
        // 선을 그리고있는 상태에서 마우스 오른쪽 클릭 이벤트가 발생하면 선 그리기를 종료합니다
        window.kakao.maps.event.addListener(
          map,
          "rightclick",
          function (mouseEvent: any) {
            if (drawingFlag) {
              moveLine?.setMap(null);
              moveLine = null;

              var path = clickLine?.getPath();

              if (path.length > 1) {
                if (dots[dots.length - 1].distance) {
                  dots[dots.length - 1].distance.setMap(null);
                  dots[dots.length - 1].distance = null;
                }

                var distance = Math.round(clickLine!.getLength()),
                  content = getTimeHTML(distance);

                showDistance(content, path[path.length - 1]);
              } else {
                deleteClickLine();
                deleteCircleDot();
                deleteDistnce();
              }

              drawingFlag = false;
            }
          },
        );

        // 클릭으로 그려진 선을 지도에서 제거하는 함수입니다
        function deleteClickLine() {
          if (clickLine) {
            clickLine.setMap(null);
            clickLine = null;
          }
        }

        // 마우스 드래그로 그려지고 있는 선의 총거리 정보를 표시하거

        function showDistance(content: string, position: any) {
          if (distanceOverlay) {
            distanceOverlay.setPosition(position);
            distanceOverlay.setContent(content);
          } else {
            distanceOverlay = new window.kakao.maps.CustomOverlay({
              map: map,
              content: content,
              position: position,
              xAnchor: 0,
              yAnchor: 0,
              zIndex: 3,
            });
          }
        }

        // 그려지고 있는 선의 총거리 정보와
        // 선 그리가 종료됐을 때 선의 정보를 표시하는 커스텀 오버레이를 삭제하는 함수입니다
        function deleteDistnce() {
          if (distanceOverlay) {
            distanceOverlay.setMap(null);
            distanceOverlay = null;
          }
        }

        // 선이 그려지고 있는 상태일 때 지도를 클릭하면 호출하여
        // 클릭 지점에 대한 정보 (동그라미와 클릭 지점까지의 총거리)를 표출하는 함수입니다
        function displayCircleDot(position: any, distance: number) {
          var circleOverlay = new window.kakao.maps.CustomOverlay({
            content: '<span class="dot"></span>',
            position: position,
            zIndex: 1,
          });

          circleOverlay.setMap(map);

          if (distance > 0) {
            var distanceOverlay = new window.kakao.maps.CustomOverlay({
              content:
                '<div class="dotOverlay">거리 <span class="number">' +
                distance +
                "</span>m</div>",
              position: position,
              yAnchor: 1,
              zIndex: 2,
            });

            distanceOverlay.setMap(map);
          }

          dots.push({ circle: circleOverlay, distance: distanceOverlay });
        }

        function deleteCircleDot() {
          var i;

          for (i = 0; i < dots.length; i++) {
            if (dots[i].circle) {
              dots[i].circle.setMap(null);
            }

            if (dots[i].distance) {
              dots[i].distance.setMap(null);
            }
          }

          dots = [];
        }

        // 그려진 선의 총거리 정보와 거리에 대한 도보, 자전거 시간을 계산하여
        // HTML Content를 만들어 리턴하는 함수입니다
        function getTimeHTML(distance: number) {
          // 도보의 시속은 평균 4km/h 이고 도보의 분속은 67m/min입니다
          var walkkTime = (distance / 67) | 0;
          var walkHour = "",
            walkMin = "";

          // 계산한 도보 시간이 60분 보다 크면 시간으로 표시합니다
          if (walkkTime > 60) {
            walkHour =
              '<span class="number">' +
              Math.floor(walkkTime / 60) +
              "</span>시간 ";
          }
          walkMin = '<span class="number">' + (walkkTime % 60) + "</span>분";

          var bycicleTime = (distance / 227) | 0;
          var bycicleHour = "",
            bycicleMin = "";

          if (bycicleTime > 60) {
            bycicleHour =
              '<span class="number">' +
              Math.floor(bycicleTime / 60) +
              "</span>시간 ";
          }
          bycicleMin =
            '<span class="number">' + (bycicleTime % 60) + "</span>분";

          var content = '<ul class="dotOverlay distanceInfo">';
          content += "    <li>";
          content +=
            '        <span class="label">총거리</span><span class="number">' +
            distance +
            "</span>m";
          content += "    </li>";
          content += "    <li>";
          content +=
            '        <span class="label">도보</span>' + walkHour + walkMin;
          content += "    </li>";
          content += "    <li>";
          content +=
            '        <span class="label">자전거</span>' +
            bycicleHour +
            bycicleMin;
          content += "    </li>";
          content += "</ul>";

          return content;
        }
      });
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, []);
  console.log(address);

  return (
    <main className="w-full flex flex-col items-center justify-center ">
      <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <div id="map" style={{ width: "100%", height: "100%" }}></div>
      </div>
    </main>
  );
}

export default TripEditMap;
