const db = require("../config/dbconfig")

Beneficios = function (ben) {
    this.car_plano_saude = ben.planoSaude,
    this.car_vale_transporte = ben.valeTransporte,
    this.car_vale_refeicao = ben.valeRefeicao,
    this.car_auxilio_creche = ben.auxilioCreche
    this.col_id = ben.id
};

Beneficios.updateBenefits = (Userdata, id, result) => {
    console.log(Userdata);
    db.query("UPDATE colaborador SET ?  WHERE col_id = ?", [Userdata,id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err);
        }
        else {
            if ("Benefícios atualizados.");
            result(res);
        }
    })
}
module.exports = Beneficios