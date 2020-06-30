const register = (req, res) => {
  res.send('Hello from auth controller - register')
}

const login = (req, res) => {
  res.send('Hello from auth controller - login')
}

export {
  register,
  login
}
