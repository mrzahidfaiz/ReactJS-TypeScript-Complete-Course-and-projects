import { FormEvent, useRef } from 'react'

function AddForm({addFun} : {addFun : (a: string)=> void}) {

    const inputRef = useRef<HTMLInputElement>(null);

    const onSubmitHandler =(e: FormEvent)=>{
        e.preventDefault();
        addFun(inputRef.current!.value);
    }

  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="input_form">Items</label>
                <input type="text" name="" id="input_form" ref={inputRef} />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    </div>
  )
}

export default AddForm