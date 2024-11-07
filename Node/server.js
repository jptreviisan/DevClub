import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())


app.get('/Rota/', async (req, res) => {

    const users = await prisma.user.findMany()

    res.status(200).json(users)
})

app.put('/Rota/:id', async (req, res) => {


    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(user)
})

app.delete('/Rota/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id,
        }
    })

    res.status(200).json({ menssage: "Usuario deletado com sucesso" })
})

app.post('/Rota', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(user)
})


app.listen(3000)
