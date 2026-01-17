import { Router } from 'express'

const router = Router()

router.get('/projects', (req, res) => {
  res.json([
    { id: 1, title: 'Projeto 1', description: 'Meu primeiro projeto' },
    { id: 2, title: 'Projeto 2', description: 'Projeto teste' },
    { id: 3, title: 'Projeto 3', description: 'Vuejs Portfólio' }
  ])
})

export default router
