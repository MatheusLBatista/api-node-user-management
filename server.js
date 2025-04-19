import express from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

/*
    - Criar nossa API de Usuários
    - Criar um usuário
    - Listar todos os usuários
    - Editar um usuários
    - Deletar um usuários
*/

app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany()

    res.status(200).json(users);
});

app.post('/users', async (req, res) => {
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    });

    res.status(201).json(req.body);
});

app.put('/users/:id', async (req, res) => {
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.params.age
        }
    })

    res.status(200).json(req.body)
})

app.listen(5001, () => {
    console.log('🚀 Server running on http://localhost:5001');
});
