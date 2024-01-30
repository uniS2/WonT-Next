import Link from "next/link";
import React from "react";

function SignBox() {
  return (
    <div className="flex w-[13.75rem] justify-between">
      <div>
        <button type="button" className="">
          비밀번호 찾기
        </button>
      </div>
      <div>
        <Link href="/signup">
          <button type="button">회원가입</button>
        </Link>
      </div>
    </div>
  );
}

export default SignBox;
