app.post('/api/login', async (req, res) => {
  const { email, password } = req.body

  const [rows] = await db.query(
    'SELECT * FROM users WHERE email = ?',
    [email]
  )

  if (!rows.length) {
    return res.status(401).json({ message: 'Usuário não encontrado' })
  }

  const user = rows[0]
  const ok = await bcrypt.compare(password, user.password)

  if (!ok) {
    return res.status(401).json({ message: 'Senha inválida' })
  }

  res.json({
    token: 'login-ok',
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  })
})
