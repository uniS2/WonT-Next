const TripRegionDaysEdit = () => {
  // 모달창 구현 예정
  const toggleTripEdit = () => {};

  return (
    <aside className="flex justify-between items-center w-full h-20 px-5 bg-contentSecondary">
      <div>
        <p className="text-white">제주 (*store 로직 구현예정)</p>
        <p className=" text-white">
          24.01.20 - 24.01.22(*TripDaysStore 구성 예정)
        </p>
      </div>
      <button
        type="button"
        onClick={toggleTripEdit}
        className="w-[3.5rem] h-7 rounded-md border border-contentMuted  text-sm text-contentMuted hover:bg-secondary hover:border-black hover:text-black hover:font-semibold"
      >
        수정
      </button>
    </aside>
  );
};

export default TripRegionDaysEdit;
