import Link from "next/link";
import { IoCloseCircleOutline } from "react-icons/io5";

const CloseButton = () => {
  return (
    <Link href="/main">
      <IoCloseCircleOutline size={"1.875rem"} color="#363636" />
    </Link>
  );
};

export default CloseButton;
