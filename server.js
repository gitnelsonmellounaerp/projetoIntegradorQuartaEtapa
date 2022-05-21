const express = require('express'); // conexao com o modulo do express
const app = express();

app.set("view engine", "ejs"); // faz o express renderizar os arquivos .ejs (precisa instalar o modulo ejs)
app.use(express.static("public")); // faz o express ler arquivos estaticos na pasta public

const bootstrap = require('bootstrap'); // ler o módulo do bootstrap


//criando as paginas

//dar ctrl c + ctrl v nessas funcoes quando for criar uma nova pagina 
app.get("/", function(req, res){
    res.render("pages/index");
});


app.get("/editar", function(req, res){
    res.render("pages/editar");
});

app.get("/atestado", function(req, res){
    res.render("pages/atestado");
});

app.listen(8080);
console.log("Servidor funcionando..."); //teste