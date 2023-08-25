import { AiOutlineEdit} from 'react-icons/ai'
import { AiFillDelete} from 'react-icons/ai'
import { useState ,useEffect} from 'react'
import axios from 'axios'

const FlowControl = () => {
const [flow, setflow] = useState()
const [flows,setflows] = useState([])

const SendData = (e) =>{
// e.preventDefault();

let formData = new FormData();
formData.append('flow',flow);

axios({
method : 'post',
url : 'http://localhost/project-diary/index.php/',
data : formData ,
config : { header : {
'Content-Type' : 'multipart/form-data'
}}
})
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});

}

useEffect(()=> {
axios
.get('http://localhost/project-diary/index.php')
.then(res => setflows(res.data))
.catch(err => console.log(err))
}, [])


return (
<div>
  <form className='flow-form' onSubmit={SendData}>
    <textarea name="" id="" value={flow} onChange={(e)=> setflow(e.target.value)}
              placeholder='Start flowing ...' autoFocus/>
        <button type='submit'>Create Flow</button>
      </form>
      <div className="search-bar">
        <input type="search" placeholder='search flow..'/>
        <h3>Flows</h3>
      </div> 
      <div className="flow-list">

       {flows.map((single)=>{
           return (
            <>
            <div className="flow" >
            <div className="flow-content">
            <p>
              {single.flow}
            </p>
            </div>
            <div className="flow-footer">
              <div className="date">
                <p>{single.time}</p>
              </div>
              <div className="icons-box">
                <div className="edit-box">
                <AiOutlineEdit/>
                </div>
                <div className="erase-box">
                  <AiFillDelete/>
                </div>
              </div>
            </div>
         </div>
            </>
           )
       })}
               
      </div>
    </div>
  )
}

export default FlowControl