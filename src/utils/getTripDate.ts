const dayText = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

export function getTripDateKo(selectDate: Date) {
  selectDate = new Date(selectDate);
  const year = selectDate.getFullYear();
  const month = selectDate.getMonth() + 1;
  const date = selectDate.getDate();
  const day = dayText[selectDate.getDay()];
  return `${year}년 ${month}월 ${date}일 ${day}`;
}

export function getTripDate(selectDate: string) {
  let [year, month, date] = selectDate.split(".");
  if (Number(month) < 10) {
    month = `0${month}`.replace(" ", "");
  }
  if (Number(date) < 10) {
    date = `0${date}`.replace(" ", "");
  }
  return `${year.slice(2)}.${month}.${date}`;
}
