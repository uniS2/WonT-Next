import { AiOutlineHome } from "react-icons/ai";
import { PiUser } from "react-icons/pi";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useRouter } from "next/router";

function HeaderTripEdit() {
  const router = useRouter();
  return (
    <header className="bg-white-opacity-50 p-5">
      <nav className="flex justify-between gap-3 bg-white-opacity-50">
        <button onClick={() => router.back()}>
          <IoArrowBackCircleOutline size="30px" color="#363636" />
        </button>
        <div className="flex gap-3">
          <button onClick={() => router.push("/main")}>
            <AiOutlineHome size="30px" color="#363636" />
          </button>
          <button onClick={() => router.push("/mypage")}>
            <PiUser size="30px" color="#363636" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default HeaderTripEdit;
