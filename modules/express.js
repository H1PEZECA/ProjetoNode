const express = require("express");
const UserModel = require("../src/models/user.model");
const app = express();
const port = 8080;

//Dizendo para o express que vamos usar o json
app.use(express.json());

//Usando Ejs ---> Não foi implementado o ejs
// app.set("view engine", "ejs");
// app.set("views", "../src/views");

//Middleware log
app.use((req, res, next)  => {
    console.log(`Request Type: ${req.method}`);
    console.log(`Request Headers: ${req.headers["content-type"]}`);
    console.log(`Request Time: ${new Date()}`);
    next();
});

//Pegar todos os usuários
app.get("/users", async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.status(200).json(users);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

//Pegar um usuário pelo id
app.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

//Criar um usuário
app.post("/users", async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//Atualizar algum usuário parametro do usuario passando o id
app.patch("/users/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

        if (!user) {
            return res.status(404).send("Usuário não encontrado");
        }

        res.status(200).json(user);
    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).send(`Erro de validação: ${error.message}`);
        }
        return res.status(500).send(error.message);
    }
});

//Deletar um usuário pelo id
app.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

//Ouvindo a porta
app.listen(port, () => {
    console.log(`Server running wiyh EXPRESS at http://localhost:${port}/`);
})