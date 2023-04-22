import { useState } from 'react';
import './App.css';
import AddForm from './components/addForm/AddForm';
import List from './components/list/List';

//Parent send Data to Child
function App() {
  const [item, setItem] = useState<string[]>(["abc", "xyz", "aeiou"])

  const addItems = (addItem: string) =>{
    setItem([...item, addItem])
  }
  return (
    <div className="App">
      <AddForm addFun={addItems} />
     <List data={item}/>
    </div>
  );
}

export default App;
