import express, { request, response } from 'express';

const app = express();

/**
 * GET => Busca
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração especifica
 */

app.get("/users", (request, response) => {
    return response.json({message: "Hello World - NLW4"});
})

app.post("/users", (request, response) => {
    return response.json({message: "Dados retornados com sucesso!"});
})

app.listen(4500, () =>  console.log("Server is running!"));