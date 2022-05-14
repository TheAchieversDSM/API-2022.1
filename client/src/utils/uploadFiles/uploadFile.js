import axios from "axios"
import { getCookie } from "../cookieUtil/cookieUtil"
function uploadFile(file,fileName){
    var dado = new FormData()
    console.log(file);
    let id = getCookie('id')
    dado.append(fileName, file)
    axios.post(`http://localhost:5000/precad1/insertArquivos/${id}`,dado, {headers: {
        "content-type": "multipart/form-data",
      }}).then((res)=>{
    })
}

export default uploadFile;