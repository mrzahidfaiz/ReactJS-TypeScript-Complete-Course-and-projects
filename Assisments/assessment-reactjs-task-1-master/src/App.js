import './App.css';
import Axios from 'axios';
import { useEffect, useState} from 'react';

function App() {
  const [data, setDate] = useState([])

  useEffect(()=>{
Axios.get('http://localhost:4000/users')
.then(res => {
  console.log("getting from server",res.data)
  setDate(res.data)
}).catch(err=> console.log(err))
  },[])
const arr = data.map((data)=>{
  return(
    <tr>
    <td>{data._id}</td>
    <td>{data.userName}</td>
    <td>{data.email}</td>
    <td>{data.address}</td>
    <td>{data.updatedAt }</td>
  </tr>
  )

})


  return (
    <div className="App">
      
      <table>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Address</th>
    <th>updated</th>
  </tr>
{arr}
  
</table>

      
    </div>
  );
}

export default App;
