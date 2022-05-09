const mysql = require("mysql2");
const sql = require("mysql");
const { builtinModules } = require("module");

// Conexão banco de dados local
const config = {
    host: "localhost",
    user: "root",
    password: "1234",
    database: "teste",
    port: 3307
};

function executar(comando){
    return new Promise((resolve, reject) => {
        const conexao = mysql.createConnection(config);
        conexao.query(comando, function(err, resultados){
            conexao.end();
            if(err){
                reject(err);
            }
            resolve(resultados);
        });
        conexao.on('error', function(err){
            return ("Erro no MySQL", err.sqlMessage);
        });
    });
}

module.exports = {executar}