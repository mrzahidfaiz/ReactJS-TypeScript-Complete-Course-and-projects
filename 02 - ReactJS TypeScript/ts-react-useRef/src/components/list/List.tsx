
import Items from "../items/Items";

function List({data}:{data : string[]}) {
    let items = data.map(item => <Items key={item} data={item} />)
  return (
    <div>
        {/* {data}
        <Items /> */}
        {items}
        
    </div>
  );
}

export default List;