export function nodeCreate(lenArray, colaboradores) {
    var nodes = []
    for (let index = 0; index < lenArray; index++) {
        let Telefone = `(${colaboradores[index].con_ddd}) ${colaboradores[index].con_telefone} `
        const node = { id: colaboradores[index].con_id, Nome: colaboradores[index].con_nome, pid: colaboradores[index].head_id,Email:colaboradores[index].con_email, Departamento:colaboradores[index].dep_descricao  ,Cargo:colaboradores[index].car_descricao, Telefone: Telefone, foto: "" }
        nodes.push(node)
    }
    return (nodes)
}