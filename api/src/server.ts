import 'reflect-metadata';
import express, { request, response } from 'express';
import "./database"
import { router } from './routes';

/**
 * GET => Busca
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração especifica
 */

const app = express();

app.use(express.json())
app.use(router)

app.listen(4500, () =>  console.log("Server is running!"));