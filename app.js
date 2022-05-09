// Importando packages
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

// Definindo o app e a porta do servidor local
const app = express();
const PORTA = 3000;
const rotas =  require("./src/routes/rotas");

// Configurando o app
app.set("view engine", "html");

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + "/public"));
app.use(cors());

// Definindo as rotas
app.use("/", rotas);

// Iniciando o servidor local
app.listen(PORTA, () => {
    console.log(`Servidor iniciado na porta ${PORTA}, visualize em: http://localhost:${PORTA}`);
});