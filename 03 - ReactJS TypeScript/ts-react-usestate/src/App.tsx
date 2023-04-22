import { useState } from "react";
import AddForm from "./components/addForm/AddForm";
import List from "./components/list/List";

function App() {
  //  const array = ["Welcome", "Zahid", "GoodBye"]
  const [item, setItem] = useState<string[]>(["Welcome", "Zahid", "GoodBye"]);

  const addItemsFromInputHanlder = (addItem: string) => {
    setItem([...item, addItem]);

    // array.push(item)
    // console.log(array)
  };

  return (
    <div>
      <AddForm addFun={addItemsFromInputHanlder} />
      <List data={item} />
    </div>
  );
}

export default App;
