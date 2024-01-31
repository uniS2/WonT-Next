
import DefaultProfile from '@/app/mypage/components/DefaultProfile';
import MyPageTab from '@/app/mypage/components/MyPageTab';
import MyPageLayout from '@/app/mypage/layout';
import { TbSettings } from "react-icons/tb";




function Mypage() {
  return (
    <MyPageLayout>
      <div className='bg-primary w-100% h-[220px] rounded-b-[40px] flex justify-center items-center flex-col gap-2'>
        <div className='flex justify-center items-center rounded-full border-[#CADDE2] border-[0.0625rem] w-[100px] h-[100px] bg-secondary'><DefaultProfile /></div>
        <span className=''>닉네임</span>
        <button className='flex gap-1 rounded-xl px-3 py-1 text-xs text-[#898989] bg-[#E9F0F0]'><TbSettings size="16px"/>프로필 수정</button>
      </div>
<MyPageTab />
      <div>

      </div>
    </MyPageLayout>
  );
}

export default Mypage;
