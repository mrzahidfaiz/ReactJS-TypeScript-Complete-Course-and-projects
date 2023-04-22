import MyButton from "../myButton/MyButton"


function Items({data}: {data: string}) {

  const onDeleteHandler = () => {
    console.log(data);
  }
  return (
    <div>
      {data} <MyButton type="button" click={onDeleteHandler} theme="cancel">Delete</MyButton>
    </div>
  )
}

export default Items