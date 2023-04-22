import Items from "../items/Items"

// Child Recived data from parent and define its type
function List({data}: {data:string[]}) {
    const items = data.map(item =>   <Items key={item} data={item} /> )
  return (
    <div>
        {items}
    </div>
  )
}

export default List