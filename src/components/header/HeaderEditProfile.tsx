import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useRouter } from "next/router";

function HeaderEditProfile() {
  const router = useRouter();
  return (
    <header className="bg-white p-5">
      <nav className="flex justify-between gap-3">
        <button type="button" onClick={() => router.back()}>
          <IoArrowBackCircleOutline size="30px" color="#363636" />
        </button>
      </nav>

      <hr className="my-5" />
    </header>
  );
}

export default HeaderEditProfile;
