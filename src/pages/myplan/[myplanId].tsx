import Link from "next/link";
import Image from "next/image";
import MyPlanDetailLayout from "@/layout/myplan/layout";

const MyPlanDetailPage = () => {
  return (
    <MyPlanDetailLayout>
      <section className="flex flex-col items-center justify-center gap-5 min-h-svh">
        <Image src="/svg/logo.svg" alt="wont" width={200} height={80} />
        <span className="text-2xl">
          <span className="font-bold text-content">서비스 준비중</span>입니다.
        </span>
        <span className="text-contentSecondary">
          이용에 불편을 드려 죄송합니다.
        </span>
        <Link
          href="/main"
          className="px-3 h-10 rounded-lg bg-primary text-white text-lg font-bold text-center align-middle leading-10"
        >
          메인으로 이동
        </Link>
      </section>
    </MyPlanDetailLayout>
  );
};

export default MyPlanDetailPage;
