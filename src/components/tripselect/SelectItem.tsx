import DefaultImage from "@/components/common/DefaultImage";

type SelectItemProps = {
  index?: number;
  imgSrc?: string;
  title?: string;
  addr?: string;
};

const SelectItem = ({ index, imgSrc, title, addr }: SelectItemProps) => {
  return (
    <li className="flex gap-5 pl-5 items-center justify-start w-full">
      <span className="min-w-5 w-5 h-5 rounded-full bg-primary text-center text-[#F3F5F5] leading-5">
        {index}
      </span>
      <div className="flex gap-3 items-center w-full p-3 rounded-xl bg-white">
        <DefaultImage src={imgSrc} />
        <div className="w-full">
          <p className="text-sm group-hover:sm:text-base group-hover:sm:font-semibold text-contentSecondary font-semibold">
            {title || "장소 이름이 정확하지 않습니다."}
          </p>
          <p className="text-xs group-hover:sm:text-sm text-point">
            {addr || "주소가 정확하지 않습니다."}
          </p>
        </div>
      </div>
    </li>
  );
};

export default SelectItem;
