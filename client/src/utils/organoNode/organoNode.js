export function nodeCreate(lenArray, colaboradores) {
    var nodes = []
    for (let index = 0; index < lenArray; index++) {
        const node = { id: colaboradores[index].con_id, Nome: colaboradores[index].con_nome, pid: colaboradores[index].head_id,Email:colaboradores[index].con_email, Departamento:colaboradores[index].dep_descricao  ,Cargo:colaboradores[index].car_descricao, foto: "" }
        nodes.push(node)
    }
    return (nodes)
}