import { motion } from "framer-motion";
import OnBoardingButton from "@/components/onboarding/OnBoardingButton";
import Layout from "@/layout/onboarding/layout";
import Image from "next/image";

const OnBoardingPage: React.FC = () => {
  return (
    <Layout>
      <section className="relative h-screen flex items-center justify-center">
        <motion.div
          className="flex flex-col items-center justify-center gap-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Image src={"/svg/logo.svg"} alt="로고" width={200} height={100} />
          <div className="text-[16px] text-black mb-[30px]">
            <p>행복한 여행을 위해 일정을 세워보세요</p>
          </div>
          <Image
            src={"/images/test-crop-unscreen.gif"}
            alt="로고"
            width={200}
            height={100}
            className="mb-[20px]"
          />
          <div className="bg-primary w-[500px] h-[500px] flex flex-col items-center justify-center">
            <video
              src="/video/tst.mp4"
              width={320}
              height={200}
              autoPlay
              loop
              preload="auto"
            ></video>
          </div>
          <OnBoardingButton
            text="WonT 시작하기"
            href="/signin"
            color="primary"
          />
        </motion.div>
      </section>
    </Layout>
  );
};

export default OnBoardingPage;
