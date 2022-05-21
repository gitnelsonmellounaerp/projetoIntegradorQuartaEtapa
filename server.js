const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

//criando as paginas

app.get("/", function(req, res){
    res.render("index");
});


app.get("/sobre", function(req, res){
    res.render("pages/editar");
});

app.get("/sobre", function(req, res){
    res.render("pages/atestado");
});

app.listen(8080);
console.log("Servidor funcionando..."); //teste