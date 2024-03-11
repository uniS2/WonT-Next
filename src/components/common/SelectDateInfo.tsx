import { DatesStore } from "@/store/DatesStore";

type SelectDateInfoType = {
  tripDate?: number;
};

const SelectDateInfo = ({ tripDate = 0 }: SelectDateInfoType) => {
  const { tripDates } = DatesStore();
  return (
    <div className="flex gap-[0.625rem] items-end">
      <span className="text-2xl text-content font-bold">
        {tripDates?.length || 0}
      </span>
      <div className="flex gap-[0.125rem] min-w-fit text-sm">
        <span className="font-medium text-[#2966E3]">{tripDate}일</span>
        <span aria-hidden>/</span>
        <span>{tripDates?.length || 0}일</span>
      </div>
    </div>
  );
};

export default SelectDateInfo;
