import { motion } from "framer-motion";
import OnBoardingButton from "@/components/onboarding/OnBoardingButton";
import Layout from "@/layout/onboarding/layout";
import Image from "next/image";

const OnBoardingPage: React.FC = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-t from-white to-blue-200 h-screen flex items-end lg:items-center">
        <motion.div
          className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:gap-[50px]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="flex flex-col items-center gap-5">
            <Image
              src={"/svg/logo.svg"}
              alt="로고"
              width={200}
              height={100}
              className="pt-[20px]"
            />
            <div className="text-[16px] text-black mb-[30px]">
              <p>행복한 여행을 위해 일정을 세워보세요</p>
            </div>
            <OnBoardingButton
              text="WonT 시작하기"
              href="/signin"
              color="primary"
            />
          </div>
          <div className="flex flex-col items-center justify-center lg:w-[450px] lg:bg-white lg:rounded-2xl lg:shadow-xl lg:h-[300px]">
            <video
              src="/video/tst.mp4"
              width={450}
              height={100}
              autoPlay
              loop
              preload="auto"
              className="hidden lg:block w-full h-auto"
              style={{ maxWidth: "50%", height: "auto" }}
            ></video>
            <Image
              src={"/images/test.png"}
              alt="test"
              width={320}
              height={200}
              className="lg:hidden"
            />
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default OnBoardingPage;
