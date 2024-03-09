type SelectDaysInfoProps = {
  totalNumber?: number;
};

const SelectDaysInfo = ({ totalNumber = 0 }) => {
  return (
    <div className="flex gap-[0.625rem] items-end">
      <span className="text-2xl text-content font-bold">{totalNumber}</span>
      <div className="flex gap-[0.125rem] min-w-fit text-sm">
        <span className="font-medium text-[#2966E3]">n일</span>
        <span aria-hidden>/</span>
        <span>n일</span>
      </div>
    </div>
  );
};

export default SelectDaysInfo;
