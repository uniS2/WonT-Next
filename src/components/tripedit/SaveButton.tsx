function SaveButton({ text }: { text: string }) {
  return (
    <button className="bg-primary text-white h-12 rounded-md my-7 w-full">
      {text}
    </button>
  );
}

export default SaveButton;
