import AddInput from "../addForm/AddInput";
import List from "../list/List";
import { useState } from "react";


function Todo() {
  const [items, setItems] = useState(["demo"]);
  const onItemAddHanlder = (item: string) => {
    setItems([...items, item]);
  };
  return (
    <div>
      <AddInput addFun={onItemAddHanlder} />
      <List data={items} />
      
    </div>
  );
}

export default Todo;
