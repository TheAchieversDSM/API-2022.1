import { cnpj } from "cpf-cnpj-validator";

export default function validarCnpj(info){
    if (cnpj.isValid(info) == true){
        return cnpj.format(info)
    }else{
        return false
    }
}