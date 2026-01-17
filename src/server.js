import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express()

app.use(cors())
app.use(express.json())

// 🔐 rota de login
import authRoutes from './routes/auth.routes.js'
app.use('/login', authRoutes)

import projectRoutes from './routes/project.routes.js'
app.use(projectRoutes)


app.listen(3000, () => {
  console.log('🚀 API rodando em http://localhost:3000')
})
