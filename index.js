const express = require("express");

// Inciando a aplicação
const server = express();

// Middleware global
server.use(express.json());

// Middleware global
// Sempre será chamad
server.use((req, res, next) => {
    console.time('Req');
    console.log("A requisição foi chamada");
    console.log(`Método: ${req.method}; URL: ${req.url}`);

    next();

    console.timeEnd('Req');
});

// Middleware local
function checkUsersExists(req, res, next) {
     if (!req.body.name) {
         return res.status(400).json({error: "Users name is required"});
     }

     return next();
}

// Middleware local
function checkUserInArray(req, res, next) {
    const user = users[req.params.index];

    if (!user) {
        return res.status(400).json({error: "Index does not exists"});
    }

    req.user = user;

    return next();
}

const users = ["João", "Ana", "Camilla"];

server.get("/users", (req, res) => {
    return res.json(users);
});

server.get("/users/:index", checkUserInArray, (req, res) => {
    return res.json(req.user);
});

server.post("/users", checkUsersExists, (req, res) => {
    const { name } = req.body;

    users.push(name);

    return res.json(users);
});

server.put("/users/:index", checkUsersExists, checkUserInArray, (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    users[index] = name;

    return res.json(users[index]);
});

server.delete("/users/:index", checkUserInArray, (req, res) => {
    const { index } = req.params;

    users.splice(index, 1);

    return res.send();
});

// Define a porta do servidor
server.listen(3000);