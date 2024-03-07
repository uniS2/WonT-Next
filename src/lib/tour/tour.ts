// 국문 관광정보 서비스 OpenAPI : https://api.visitkorea.or.kr/#/useKoreaGuide
const TOUR_END_POINT = "http://apis.data.go.kr/B551011/KorService1";
const USE_TOUR_KEY = `serviceKey=${process.env.NEXT_PUBLIC_TOUR_KEY}`;
const TOUR_BASE_PARAMETER = "&_type=json&MobileOS=ETC&MobileApp=WonT";

// 지역코드 조회 : &numOfRows=10&pageNo=1
export const TOUR_BASE_AREA = `${TOUR_END_POINT}/areaCode1?${USE_TOUR_KEY}&numOfRows=100${TOUR_BASE_PARAMETER}`;

// 위치기반 관광정보 조회 : &numOfRows=10&pageNo=1&mapX=126.981611&mapY=37.568477&radius=1000&listYN=Y
export const TOUR_BASE_LOCATION = `${TOUR_END_POINT}/locationBasedList1?${USE_TOUR_KEY}${TOUR_BASE_PARAMETER}`;

// 키워드 검색 조회 : &pageNo=1&numOfRows=10&listYN=Y&contentTypeId=12&keyword=%EA%B0%95%EC%9B%90
export const TOUR_BASE_SEARCH = `${TOUR_END_POINT}/areaBasedList1?${USE_TOUR_KEY}${TOUR_BASE_PARAMETER}&arrange=A&numOfRows=12`;

// 숙박 정보 조회
export const TOUR_BASE_ACCOMMODATION = `${TOUR_END_POINT}/areaBasedList1?${USE_TOUR_KEY}${TOUR_BASE_PARAMETER}&arrange=A&contentTypeId=32`;
