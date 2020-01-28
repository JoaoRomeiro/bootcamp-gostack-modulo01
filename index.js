const express = require("express");

// Verifica se o express foi instalado
// Executar o comando node index.js
//console.log(express);

// Inciando a aplicação
const server = express();

// localhost:3000/users

// req: Armazena todos os dados da requisição, query params, route params, request body
// res: Todas as informações para retornar uma resposta para o cliente \ front-end

// Query params
server.get("/users", (req, res) => {
    //console.log("teste");

    // Retorna um texto
    //return res.send("hello word!");

    const name = req.query.name;

    // Retorna um json
    return res.json({ mensagem: `Olá ${name}` });
});

// Rouote params
server.get("/users/:id", (req, res) => {
    //console.log("teste");

    // Retorna um texto
    //return res.send("hello word!");

    //const id = req.params.id;

    // Desconstrução
    const { id } = req.params;

    // Retorna um json
    return res.json({ mensagem: `O ID solicitado é ${id}` });
});

// Definir a porta do servidor
server.listen(3000);