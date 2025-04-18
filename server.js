import express from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();
const users = [];

app.use(express.json())

/*
    - Criar nossa API de Usuários
    - Criar um usuário
    - Listar todos os usuários
    - Editar um usuários
    - Deletar um usuarios
*/

app.get('/users', (req, res) => {
    res.status(200).json(users)
})

app.post('/users', (req, res) => {
    users.push(req.body)

    res.status(201).json(req.body);
})

app.listen(5001);