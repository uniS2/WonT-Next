import TripReviewWritingLayout from "@/layout/tripreviewwriting/layout";
import { debounce } from "@/utils/debounce";
import React, { useState } from "react";
import { BsX } from "react-icons/bs";

function TripReviewWriting() {
  const [textContents, setTextContents] = useState("");
  const [uploadImage, setUploadImage]: any = useState([]);
  const [imageSrc, setImageSrc]: any = useState([]);

  const handleTextContents = debounce(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const updatedText = e.target.value;
      setTextContents(updatedText);
    },
    1200,
  );

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const files = Array.from(e.target.files);
      setUploadImage((prevUploadImages: any) => [
        ...prevUploadImages,
        ...files,
      ]);

      const promises = files.map((file) => {
        return new Promise<void>((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            setImageSrc((prevState: any) => [
              ...prevState,
              reader.result || null,
            ]);
            resolve();
          };
        });
      });

      Promise.all(promises).then(() => {
        console.log(imageSrc);
      });
    }
  };

  const handleDeleteImage = (e: React.MouseEvent, index: number) => {
    const targetImage = e.currentTarget.parentNode?.querySelector("img");
    const targetImageSrc = targetImage?.getAttribute("src");

    setUploadImage((prevUploadImages: any[]) =>
      prevUploadImages.filter((i) => i !== index),
    );

    if (targetImageSrc) {
      setImageSrc((prevImageSrc: any) =>
        prevImageSrc.filter((item: string) => item !== targetImageSrc),
      );
    }
  };

  return (
    <TripReviewWritingLayout>
      <>
        {imageSrc.map((image: string | undefined, index: number) => (
          <div key={index} className="relative">
            <img src={image} alt="" className="h-28 mx-4 object-cover" />
            <button
              type="button"
              className="absolute top-0 right-0 p-1"
              onClick={(e) => handleDeleteImage(e, index)}
            >
              <BsX color="#828282" />
            </button>
          </div>
        ))}
      </>
      <form action="">
        <input
          type="file"
          className="w-full h-full text-center"
          accept="image/*"
          multiple
          onChange={(e) => handleUpload(e)}
        />
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          className="border border-gray-300 outline-none resize-none"
          onChange={handleTextContents}
        ></textarea>
      </form>
    </TripReviewWritingLayout>
  );
}

export default TripReviewWriting;
