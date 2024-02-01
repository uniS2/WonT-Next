import React from "react";

function OnBoardingSideButton() {
  return (
    <>
      <div className="rounded-lg flex flex-col gap-4 w-[50px] h-[220px] bg-primary items-center justify-center">
        <button
          type="button"
          className="rounded-lg w-[35px] h-[35px] bg-white hover:bg-point"
        >
          1
        </button>
        <button
          type="button"
          className="rounded-lg w-[35px] h-[35px] bg-white hover:bg-point"
        >
          2
        </button>
        <button
          type="button"
          className="rounded-lg w-[35px] h-[35px] bg-white hover:bg-point"
        >
          3
        </button>
        <button
          type="button"
          className="rounded-lg w-[35px] h-[35px] bg-white hover:bg-point"
        >
          4
        </button>
      </div>
    </>
  );
}

export default OnBoardingSideButton;
