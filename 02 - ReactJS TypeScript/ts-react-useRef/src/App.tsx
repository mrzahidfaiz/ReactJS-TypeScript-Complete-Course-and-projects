import List from "./components/list/List";
import AddForm from "./components/addForm/AddForm";

function App() {
  //const text = "Welcome";
  const array = ["Welcome", "Muhammad ZAhid", "Website", "Guest Users",]

  const addItemsHandler = (itemText : string) => {
    array.push(itemText);
    console.log(array);
  }
 
  return (
    <div>
     {/* <List data={text} /> */}
     <AddForm add={addItemsHandler}/>
     <List data={array} />
     
    </div>
  );
}

export default App;
