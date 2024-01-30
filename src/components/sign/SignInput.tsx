import React from "react";

interface SignInputProps {
  text: string;
  placeholder: string;
  type: "email" | "password";
}

const SignInput: React.FC<SignInputProps> = ({ text, placeholder, type }) => {
  return (
    <div className="pt-[3rem] min-w-[18.75rem] sm:min-w-[31.25rem] lg:min-w-[43.75rem] 2xl:min-w-[56.25rem] flex flex-col gap-3 border-b-2 border-primary mx-auto pb-[0.313rem]">
      <p className="text-[1rem] sm:text-[1.25rem] lg:text-[1.563rem]">{text}</p>
      <input
        type={type}
        placeholder={placeholder}
        className="text-[1rem] sm:text-[1.25rem] lg:text-[1.563rem]"
      />
    </div>
  );
};

export default SignInput;
