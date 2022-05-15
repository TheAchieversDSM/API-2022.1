import axios from "axios"
import { getCookie } from "../cookieUtil/cookieUtil"

function uploadFile(files) {
    Object.keys(files).map(file => {
        var dado = new FormData()
        let id = getCookie('id')
        dado.append(file, files[file])
        axios.post(`http://localhost:5000/precad1/insertArquivos/${id}`,dado, {headers: {
            "content-type": "multipart/form-data",
        }})
    })
}

export default uploadFile;