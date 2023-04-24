type mybuttonProps = {
  children: string;
  type: "submit" | "button";
  theme: "ok" | "cancel";
  click?: () => void;
};

function MyButton({ children, type, theme, click }: mybuttonProps) {
  return (
    <div>
      <button
        type={type}
        onClick={click}
        style={
          theme === "ok"
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
      >
        {children}
      </button>
    </div>
  );
}

export default MyButton;
