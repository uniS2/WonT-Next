import DefaultImage from "@/components/common/DefaultImage";

type SelectItemProps = {
  isSelected?: boolean;
};

const SelectItem = ({ isSelected = false }: SelectItemProps) => {
  return (
    <li className="flex gap-5 pl-5 items-center justify-start w-full min-h-[4.0625rem]">
      <span
        className={`w-5 h-5 rounded-full ${isSelected ? "bg-primary" : "bg-[#D0CFD7]"} text-center text-[#F3F5F5] leading-5`}
      >
        n
      </span>
      <div className="flex gap-[0.625rem] items-center w-full p-[0.625rem] rounded-[0.625rem] bg-white">
        <DefaultImage size={"45px"} />
        <p className="text-sm text-contentMuted">추가된 장소가 없습니다.</p>
      </div>
    </li>
  );
};

export default SelectItem;
