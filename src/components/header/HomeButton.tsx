import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

const HomeButton = () => {
  return (
    <Link href="/main">
      <AiOutlineHome size="1.875rem" color="#363636" />
    </Link>
  );
};

export default HomeButton;
