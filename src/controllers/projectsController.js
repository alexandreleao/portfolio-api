class ProjectController {
  index(req, res) {
    return res.json([
      { id: 1, title: 'Projeto 1', description: 'Meu primeiro projeto' },
      { id: 2, title: 'Projeto 2', description: 'Projeto teste' },
      { id: 3, title: 'Vuejs Portfólio', description: 'Frontend em Vue' }
    ])
  }
}

export default new ProjectController()
