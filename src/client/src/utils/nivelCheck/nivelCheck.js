export default function nivelCheck(nivelId){
    if (nivelId =="0"){
        return("acessoComum")
    }
    else if(nivelId =="1"){
        return("acessoTotal")
    }
    else if(nivelId =="2"){
        return("acessoGestor")
    }
    else if(nivelId =="3"){
        return("acessoConsultor")
    }
}