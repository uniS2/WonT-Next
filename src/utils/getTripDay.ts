const dayText = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

export function getTripDate(date: string) {
  return date.slice(0, 10);
}

export function getTripDateKo(dates: Date) {
  const now = new Date(dates);
  const month = now?.getMonth() + 1;
  const date = now?.getDate();
  const day = dayText[now?.getDay()];
  return `${month}월 ${date}일 ${day}`;
}

export function getTripDateUTC(dates: Date | undefined) {
  if (!dates || isNaN(dates.getTime())) {
    return "1970-01-01T00:00:00.123Z";
  }

  const dateUTC = new Date(dates).toISOString();
  return dateUTC;
}
