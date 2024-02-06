import CloseButton from "@/components/header/CloseButton";
import UserButton from "@/components/header/UserButton";

const HeaderTripSelect = () => {
  return (
    <nav className="flex items-center justify-between w-full px-5 py-[15px]">
      <CloseButton />
      <UserButton />
    </nav>
  );
};

export default HeaderTripSelect;
