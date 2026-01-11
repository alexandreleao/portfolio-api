import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors({
  origin: 'http://localhost:5173'
}))
app.use(express.json())

// 🔹 rota de projetos
app.get('/projects', (req, res) => {
  res.json([
    { id: 1, title: 'Projeto 1', description: 'Meu primeiro projeto' },
    { id: 2, title: 'Projeto 2', description: 'Projeto teste' },
    { id: 3, title: 'Vuejs Portfólio', description: 'Frontend em Vue' }
  ])
})

// 🔹 rota de login (API de login)
app.post('/api/login', (req, res) => {
  const { email, password } = req.body

  if (email === 'admin@email.com' && password === '123456') {
    return res.json({
      token: 'fake-jwt-token',
      user: {
        name: 'Admin',
        email
      }
    })
  }

  return res.status(401).json({
    message: 'Email ou senha inválidos'
  })
})

export default app
