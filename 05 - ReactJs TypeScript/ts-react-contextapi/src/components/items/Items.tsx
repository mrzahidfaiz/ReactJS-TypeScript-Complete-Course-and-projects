import "./items.css";


function Items({data}: {data: string}) {
  return (
    <div className="container_items">
        <div>{data}</div>
    </div>
  )
}

export default Items