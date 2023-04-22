import Items from '../items/Items';

function List({data}: {data: string[]}) {
    const items = data.map(item =>  <Items data={item} />)
  return (
    <div>
        {items}
    </div>
  );
}

export default List;