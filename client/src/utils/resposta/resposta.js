export function Resposta() {
    var res = getElementById("aceitar");
    if (res != null) {
        return alert('Cadastro Aprovado!')
    }
    else {
        
        return alert('Cadastro Negado.')
    }
}