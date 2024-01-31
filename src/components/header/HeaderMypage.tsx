import { AiOutlineHome } from "react-icons/ai";
import { PiUser } from "react-icons/pi";
import { IoArrowBackCircleOutline } from "react-icons/io5";


function HeaderMypage() {
  return (
    <header className="bg-primary p-5">
    <nav className="flex justify-between gap-3">
    <IoArrowBackCircleOutline size="30px" color="#363636" />
    <div className="flex gap-3">
      <AiOutlineHome size="30px" color="#363636"  />
      <PiUser  size="30px" color="#363636"/>
    </div>
    </nav>
  </header>
  )
}

export default HeaderMypage

