export function nodeCreate(lenArray, colaboradores) {
    var nodes = []
    for (let index = 0; index < lenArray; index++) {
        let Telefone = `(${colaboradores[index].con_ddd}) ${colaboradores[index].con_telefone} `
        let Endereco = `${colaboradores[index].end_rua}, N°${colaboradores[index].end_numero},${colaboradores[index].end_bairro} - ${colaboradores[index].end_estado}`

        const node = {  id: colaboradores[index].con_id,
                        Nome: colaboradores[index].con_nome,
                        pid: colaboradores[index].head_id,
                        Email:colaboradores[index].con_email,
                        Departamento:colaboradores[index].dep_descricao  ,
                        Cargo:colaboradores[index].car_descricao,
                        Telefone: Telefone,
                        Contratação: colaboradores[index].cont_descricao,
                        Endereço: Endereco,
                        Raça: colaboradores[index].user_raca,
                        Nacionalidade: colaboradores[index].user_nacionalidade ,
                        CPF: colaboradores[index].user_cpf,
                        foto: "" }

        if (colaboradores[index].head_id == '1'){
            node.tags = ["assistant"]
        }
        nodes.push(node)
    }
    return (nodes)
}