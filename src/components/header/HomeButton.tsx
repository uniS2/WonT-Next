import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

const HomeButton = () => {
  return (
    <Link href="/main">
      <AiOutlineHome
        size="1.875rem"
        color="#363636"
        title="메인 페이지 바로가기 /main"
      />
    </Link>
  );
};

export default HomeButton;
