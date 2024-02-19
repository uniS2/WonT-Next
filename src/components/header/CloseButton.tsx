import Image from "next/image";
import Link from "next/link";

const CloseButton = () => {
  return (
    <Link href="/main">
      <Image src="/svg/closeIcon.svg" width={30} height={30} alt="닫기" />
    </Link>
  );
};

export default CloseButton;
