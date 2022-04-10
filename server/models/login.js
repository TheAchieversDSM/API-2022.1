const db = require('../config/dbconfig')

import User from './user'

User.loginUser = (Userdata, result) => {
    email = db.query("SELECT n_email FROM colaborador", Userdata, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } 
        else {
            if (email == User.con_email) {
                console.log("LOGIN");
                result(null, res);
            }
        }
    })
}