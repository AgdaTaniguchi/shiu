const database = require("../database/config");

function listarUsuarios(){
    const comando = "SELECT * FROM usuario";
    return database.executar(comando);
}

module.exports = {listarUsuarios};