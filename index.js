const express = require("express");

// Verifica se o express foi instalado
// Executar o comando node index.js
//console.log(express);

// Inciando a aplicação
const server = express();

// localhost:3000/users

// req: Armazena todos os dados da requisição, query params, route params, request body
// res: Todas as informações para retornar uma resposta para o cliente \ front-end
server.get("/users", (req, res) => {
    //console.log("teste");

    // Retorna um texto
    //return res.send("hello word!");

    // Retorna um json
    return res.json({ mensagem: "Olá mundo!" })
});

// Definir a porta do servidor
server.listen(3000);