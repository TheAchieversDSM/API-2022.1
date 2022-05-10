import axios from "axios"
import { getCookie } from "../cookieUtil/cookieUtil"
function uploadFile(file){
    var dado = new FormData()
    let id = getCookie('id')
    dado.append('file', file)
    
    axios.post(`http://localhost:5000/upload/${id}`,dado, {headers: {
        "content-type": "multipart/form-data",
      }}).then((res)=>{
        console.log(res.data);
        console.log("foi");
    })
}

export default uploadFile;