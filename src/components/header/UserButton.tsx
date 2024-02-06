import Image from "next/image";
import Link from "next/link";

const UserButton = () => {
  return (
    <Link href="/main">
      <Image src="/svg/userIcon.svg" width={26} height={26} alt="사용자" />
    </Link>
  );
};

export default UserButton;
