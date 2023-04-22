import { FormEvent, useRef } from "react";

function AddForm({add} : {add : (a: string) => void}) {

  const inputRef = useRef<HTMLInputElement>(null);
  
  const onSubmitHanlder = (e: FormEvent) =>{
    e.preventDefault();
    add(inputRef.current!.value);
    //console.log(inputRef.current?.value)
  }

  return (
    <form onSubmit={onSubmitHanlder}>
      <div>
        <label htmlFor="my_input">Item Name</label>
        <input type="text" name="" id="my_input"  ref={inputRef} />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default AddForm;
