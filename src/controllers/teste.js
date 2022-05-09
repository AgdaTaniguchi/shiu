// Controller
var teste = require("../models/modelo");

function listar(req, res){
    teste.listarUsuarios().then(function(resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }
        else{
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function(err){
        console.log(err);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {listar};