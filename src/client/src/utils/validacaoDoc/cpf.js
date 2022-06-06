import { cpf } from "cpf-cnpj-validator";

export default function validarCpf(info){
    if (cpf.isValid(info) == true){
        return cpf.format(info)
    }else{
        return false
    }
}