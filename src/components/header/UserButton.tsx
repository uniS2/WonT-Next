import Link from "next/link";
import { PiUser } from "react-icons/pi";

const UserButton = () => {
  return (
    <Link href="/mypage">
      <PiUser
        size="1.875rem"
        color="#363636"
        title="사용자 페이지 바로가기 /mypage"
      />
    </Link>
  );
};

export default UserButton;
