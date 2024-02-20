import Link from "next/link";
import { IoCloseCircleOutline } from "react-icons/io5";

const CloseButton = () => {
  return (
    <Link href="/main">
      <IoCloseCircleOutline
        size={"1.875rem"}
        color="#363636"
        title="헌재 페이지 닫은 후 메인 페이지 바로가기 /main"
      />
    </Link>
  );
};

export default CloseButton;
