import Link from "next/link";
import React from "react";

interface OnBoardingProps {
  text: string;
  color?: string;
  href: string;
}

const OnBoardingButton: React.FC<OnBoardingProps> = ({
  text,
  color = "",
  href,
}) => {
  const colorClass = `bg-${color}`;

  return (
    <Link href={href}>
      <button
        type="button"
        className={`hover:bg-content w-[20rem] h-[3.125rem] font-semibold text-[1.313rem] ${colorClass} rounded-xl text-white`}
      >
        {text}
      </button>
    </Link>
  );
};

export default OnBoardingButton;
