import { AiOutlineHome } from "react-icons/ai";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { PiUserCircle } from "react-icons/pi";

function HeaderMypage() {
  return (
    <header className="bg-primary p-5">
      <nav className="flex justify-between gap-3">
        <button>
          <IoArrowBackCircleOutline size="30px" color="#363636" />
        </button>
        <div className="flex gap-3">
          <button>
            <AiOutlineHome size="28px" color="#363636" />
          </button>
          <button>
            <PiUserCircle size="30px" color="#363636" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default HeaderMypage;
