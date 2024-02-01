function MyPageTitle({ text }: { text: string }) {
  return (
    <div className="flex gap-2">
      <span>{text}</span>
      <div className="rounded-full w-5 h-5 text-sm  bg-primary flex justify-center self-center">
        <span className="m-auto text-white">3</span>
      </div>
    </div>
  );
}

export default MyPageTitle;
