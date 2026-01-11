export async function login(req, res) {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Dados inválidos' })
  }

  return res.json({
    message: 'Login recebido com sucesso',
    email
  })
}
