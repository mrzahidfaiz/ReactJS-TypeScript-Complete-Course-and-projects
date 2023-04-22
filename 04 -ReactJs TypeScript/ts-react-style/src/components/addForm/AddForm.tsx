import {  FormEvent, useRef } from "react";
import MyButton from "../myButton/MyButton";
import "./addForm.css";

function AddForm({ addFun }: { addFun: (a: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmitHanlder = (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current!.value === "") {
      return false;
    } else {
      addFun(inputRef.current!.value);
    }
  };

  return (
    <div >
      <form onSubmit={onSubmitHanlder}>
      <div className="container_div">
        <div>
          <label htmlFor="input_form">Add Items</label>
          <input type="text" name="" id="input_form" ref={inputRef} />
        </div>
        <div>
          <MyButton type="submit" theme="ok">add</MyButton>
        </div>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
