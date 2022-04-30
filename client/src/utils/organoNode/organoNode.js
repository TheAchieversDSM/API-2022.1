export function nodeCreate(lenArray,colaboradores) {
    var nodes = []
    for (let index = 0; index < lenArray; index++) {
        const node = { id: colaboradores[index].con_id, name: colaboradores[index].con_nome, pid: "", title: colaboradores[index].car_descricao, img: "" }
        nodes.push(node)
    }
    return (nodes)
}

