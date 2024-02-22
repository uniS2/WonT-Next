import Link from "next/link";
import { PiUser } from "react-icons/pi";

const UserButton = () => {
  return (
    <Link href="/mypage">
      <PiUser size="1.875rem" color="#363636" />
    </Link>
  );
};

export default UserButton;
