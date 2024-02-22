import Image from "next/image";

type DefaultImageProps = {
  size?: string;
};

const DefaultImage = ({ size }: DefaultImageProps) => {
  return (
    <div
      className={`flex justify-center align-middle w-[${size}] h-[${size}] rounded-[0.625rem] bg-[#EFF2F6]roun`}
    >
      <Image
        src="svg/default-image.svg"
        alt="기본 이미지"
        width={10}
        height={10}
      />
    </div>
  );
};

export default DefaultImage;
