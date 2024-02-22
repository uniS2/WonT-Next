import Image from "next/image";
import { RegionStore } from "@/store/RegionStore";
import { RegionToggleStore } from "@/store/RegionToggleStore";

const RegionItem = ({ regionName = "지역이름" }) => {
  const { selectedRegionName, setRegionName, resetRegionName } = RegionStore();
  const { setToggleRegionName } = RegionToggleStore();

  const selectRegion = () => {
    if (!selectedRegionName) {
      setRegionName(regionName);
      setToggleRegionName(regionName);
    } else {
      resetRegionName();
      setToggleRegionName(null);
    }
  };

  return (
    <li className="list-none">
      <button
        type="button"
        onClick={selectRegion}
        className="flex flex-col items-center gap-[0.625rem] p-[0.625rem]"
      >
        <div className="relative w-[8.4375rem] h-[8.4375rem] rounded-[0.625rem] overflow-hidden bg-[#D0CFD7] object-cover">
          <Image
            src="/svg/regionIcon-selected.svg"
            width={20.5}
            height={20}
            alt="선택한 여행 지역"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <dl>
          <dt className="sr-only">지역이름</dt>
          <dd className="mx-[0.625rem] my-[0.125rem] text-lg text-contentSecondary font-medium">
            {regionName}
          </dd>
        </dl>
      </button>
    </li>
  );
};

export default RegionItem;
