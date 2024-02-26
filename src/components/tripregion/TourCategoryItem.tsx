type TourCategoryItemPropType = {
  children?: string;
  color?: string;
};

const TourCategoryItem = ({
  children = "#기타",
  color = "bg-primary",
}: TourCategoryItemPropType) => {
  return (
    <button
      className={`px-[0.625rem] py-[0.125rem] rounded-full ${color} text-sm text-white`}
      type="button"
    >
      {children}
    </button>
  );
};

export default TourCategoryItem;
