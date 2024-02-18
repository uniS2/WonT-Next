import BackButton from "@/components/header/BackButton";
import CloseButton from "@/components/header/CloseButton";
import HomeButton from "@/components/header/HomeButton";
import UserButton from "@/components/header/UserButton";

type HeaderTripSelectProps = {
  isPadding?: boolean;
  inCloseButton?: boolean;
  inBackButton?: boolean;
  inHomeButton?: boolean;
  inUserButton?: boolean;
};

const HeaderTripSelect = ({
  isPadding = false,
  inCloseButton = false,
  inBackButton = false,
  inHomeButton = false,
  inUserButton = false,
}: HeaderTripSelectProps) => {
  return (
    <header
      className={`flex items-center justify-between w-full ${isPadding ? "px-5 py-[0.9375rem]" : "py-[0.9375rem]"}`}
    >
      {!inCloseButton && <CloseButton />}
      {!inBackButton && <BackButton />}
      {!inHomeButton && !inUserButton ? (
        <div className="flex gap-3">
          <HomeButton />
          <UserButton />
        </div>
      ) : !inHomeButton ? (
        <HomeButton />
      ) : !inUserButton ? (
        <UserButton />
      ) : (
        <></>
      )}
    </header>
  );
};

export default HeaderTripSelect;
