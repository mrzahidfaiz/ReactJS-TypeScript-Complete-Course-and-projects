import Items from "../items/Items";
import "./list.css";

function List({ data }: { data: string[] }) {
  const items = data.map((item) => <Items key={item} data={item} />);
  return (
    <div className="conatiner_list">
      <div>{items.length}</div>
      <div>{items}</div>
    </div>
  );
}

export default List;
