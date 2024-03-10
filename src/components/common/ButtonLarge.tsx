import Link from "next/link";
import { ToastContainer } from "react-toastify";

type ButtonLargePropType = {
  isSelected?: boolean;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
};

const ButtonLarge = ({
  isSelected = false,
  href,
  onClick,
  children = "선택 완료",
}: ButtonLargePropType) => {
  const buttonClasses = "w-80 h-16 rounded-xl font-bold text-white";

  if (isSelected && href) {
    return (
      <Link
        href={href}
        className={`${buttonClasses} bg-point text-center align-middle leading-[4rem]`}
      >
        {children}
      </Link>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={`${buttonClasses} bg-primary`}
      >
        {children}
      </button>
      <ToastContainer />
    </>
  );
};

export default ButtonLarge;
