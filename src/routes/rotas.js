const express = require("express");
const rota = express.Router();

const aviso = require("../controllers/teste");

rota.get("/", function(req, res){
    res.render("index");
});

rota.get("/cadastro", function(req, res){
    res.render("cadastro");
});

rota.get("/listar-usuarios", function(req, res){
    aviso.listar(req, res);
});

module.exports = rota;