export async function login(req, res) {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha obrigatórios' })
  }

  if (email === 'admin@email.com' && password === '123456') {
    return res.json({
      success: true,
      user: {
        id: 1,
        name: 'Administrador',
        email
      }
    })
  }

if (rows.length === 0) {
  return res.status(401).json({ message: 'Credenciais inválidas' })
}}
