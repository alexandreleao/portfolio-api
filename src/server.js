import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.routes.js'

const app = express()

// 🔴 ESSENCIAL — SEM ISSO req.body VEM UNDEFINED
app.use(cors())
app.use(express.json())

// rotas
app.use('/login', authRoutes)

app.listen(3000, () => {
  console.log('🚀 API rodando em http://localhost:3000')
})

app.use(express.json())

// 🔓 público
app.get('/projects', (req, res) => {
  res.json([
    { id: 1, title: 'Projeto 1', description: 'Meu primeiro projeto' },
    { id: 2, title: 'Projeto 2', description: 'Projeto teste' }
  ])
})

// 🔐 protegido
app.use('/login', authRoutes)
