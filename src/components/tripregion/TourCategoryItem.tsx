type TourCategoryItemPropType = {
  children?: string;
  color?: string;
};

const TourCategoryItem = ({
  children = "기타",
  color = "bg-primary",
}: TourCategoryItemPropType) => {
  return (
    <button
      className={`min-w-fit px-3 py-1 rounded-full ${color} text-sm text-white hover:bg-button hover:text-content hover:font-semibold hover:shadow-md hover:shadow-gray-400`}
      type="button"
    >
      #{children}
    </button>
  );
};

export default TourCategoryItem;
