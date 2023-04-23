import { FormEvent, useRef } from "react";
import "./addinput.css";
import MyButton from "../myButton.tsx/MyButton";

function AddInput({ addFun }: { addFun: (a: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitHanlder = (event: FormEvent) => {
    event.preventDefault();
    addFun(inputRef.current!.value);
  };

  return (
    <div>
      <form className="container" onSubmit={onSubmitHanlder}>
        <div>
          <label htmlFor="input_form">Items</label>
        </div>
        <div>
          <input type="text" name="" id="input_form" ref={inputRef} />
        </div>
        <div>
          <MyButton type="submit" theme="ok">
            Add
          </MyButton>
        </div>
      </form>
    </div>
  );
}

export default AddInput;
