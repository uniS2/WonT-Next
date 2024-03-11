interface SaveButtonProps {
  text?: string;
  handleSave: (e: React.MouseEvent) => void;
}

function SaveButton({ text, handleSave }: SaveButtonProps) {
  return (
    <button
      className="bg-primary text-white h-12 rounded-md my-7 w-full"
      onClick={handleSave}
    >
      {text}
    </button>
  );
}

export default SaveButton;
