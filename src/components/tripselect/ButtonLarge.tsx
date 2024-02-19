type ButtonLargePropType = {
  children: React.ReactNode;
};

const ButtonLarge = ({ children }: ButtonLargePropType) => {
  return (
    <button
      type="button"
      className={`w-80 h-16 rounded-[0.625rem] bg-primary font-bold text-white`}
    >
      {children}
    </button>
  );
};

export default ButtonLarge;
