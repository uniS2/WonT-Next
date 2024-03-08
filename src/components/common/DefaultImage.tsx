import Image from "next/image";

type DefaultImageProps = {
  width?: string;
  heigth?: string;
  title?: string;
  src?: string;
};

const DefaultImage = ({
  width = "w-14",
  heigth = "h-14",
  title,
  src,
}: DefaultImageProps) => {
  if (src) {
    return (
      <Image
        src={src}
        alt={title!}
        width="700"
        height="425"
        className="min-w-14 w-14 h-14 object-cover rounded-xl group-hover:sm:min-w-40 group-hover:sm:w-40 group-hover:sm:h-40"
        //TODO@uniS2: 모바일 touch 처리 예정
        // https://ykwan0714.github.io/%ED%84%B0%EC%B9%98-%EB%94%94%EB%B0%94%EC%9D%B4%EC%8A%A4-%EB%AA%A8%EB%B0%94%EC%9D%BC%EC%97%90%EC%84%9C-hover-%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B8%B0/
      />
    );
  } else {
    return (
      <div
        className={`flex justify-center align-middle min-w-14 ${width} ${heigth} rounded-xl bg-[#EFF2F6]`}
      >
        <Image
          src="svg/default-image.svg"
          alt="기본 이미지"
          width={10}
          height={10}
        />
      </div>
    );
  }
};

export default DefaultImage;
