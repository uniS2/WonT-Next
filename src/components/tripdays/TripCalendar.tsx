import Calendar from "react-calendar";
import { DaysStore } from "@/store/DaysStore";
import "@/styles/calendar.css";

export const TripCalendar = () => {
  const { setTripDays } = DaysStore();

  return (
    <Calendar
      className={"h-[19.875rem w-[19.875rem] p-[1.3475rem] text-content"}
      locale="ko"
      onChange={(value) => setTripDays(value)}
      selectRange={true}
      formatMonthYear={(_, date) =>
        `${date.getFullYear()}.${date.getMonth() + 1}`
      }
      formatDay={(_, date) => date.toLocaleString("en", { day: "numeric" })}
      minDetail="year"
      maxDetail="month"
      next2Label={null}
      prev2Label={null}
      prevAriaLabel={"전 달로 이동"}
      nextAriaLabel={"다음 달로 이동"}
      tileDisabled={({ date }) =>
        date < new Date(new Date().setDate(new Date().getDate() - 1))
      }
    />
  );
};
