export function nodeCreate(lenArray, colaboradores) {
    var nodes = []
    for (let index = 0; index < lenArray; index++) {
        let Telefone = `(${colaboradores[index].col_ddd}) ${colaboradores[index].col_telefone} `
        let Endereco = `${colaboradores[index].col_end_rua}, N°${colaboradores[index].col_end_numero},${colaboradores[index].col_end_bairro} - ${colaboradores[index].col_end_estado}`

        const node = {  id: colaboradores[index].col_id,
                        Nome: colaboradores[index].col_nome,
                        pid: colaboradores[index].col_head_id,
                        Email:colaboradores[index].col_email,
                        Departamento:colaboradores[index].dep_descricao  ,
                        Cargo:colaboradores[index].car_descricao,
                        Telefone: Telefone,
                        Contratação: colaboradores[index].cont_descricao,
                        Endereço: Endereco,
                        Raça: colaboradores[index].user_raca,
                        Nacionalidade: colaboradores[index].user_nacionalidade ,
                        CPF: colaboradores[index].user_cpf,
                        foto: "" }

        //if (colaboradores[index].car_descricao == colaboradores[index].dep_head ){
         //   node.tags = ["assistant"]
        //}
        nodes.push(node)
    }
    return (nodes)
}