import { IoArrowBackCircleOutline } from "react-icons/io5";

function HeaderEditProfile() {
  return (
    <header className="bg-white p-5">
      <nav className="flex justify-between gap-3">
        <button>
          <IoArrowBackCircleOutline size="30px" color="#363636" />
        </button>
      </nav>

      <hr className="my-5" />
    </header>
  );
}

export default HeaderEditProfile;
