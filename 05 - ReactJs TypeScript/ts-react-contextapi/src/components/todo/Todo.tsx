import AddInput from "../addForm/AddInput";
import List from "../list/List";

type todoProps = {
  onItemAddHanlder: (item: string) => void;
  items: string[];
};

function Todo({ onItemAddHanlder, items }: todoProps) {
  return (
    <div>
      <AddInput addFun={onItemAddHanlder} />
      <List data={items} />
    </div>
  );
}

export default Todo;
