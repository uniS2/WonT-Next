import { AiOutlineHome } from "react-icons/ai";
import { PiUser } from "react-icons/pi";
import { IoArrowBackCircleOutline } from "react-icons/io5";

function HeaderMypage() {
  return (
    <header className="bg-primary p-5">
      <nav className="flex justify-between gap-3">
        <button>
          <IoArrowBackCircleOutline size="30px" color="#363636" />
        </button>
        <div className="flex gap-3">
          <button>
            <AiOutlineHome size="30px" color="#363636" />
          </button>
          <button>
            <PiUser size="30px" color="#363636" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default HeaderMypage;
