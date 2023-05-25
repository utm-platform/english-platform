const createUser = async (req, res) => {
  res.json({ message: 'Create User!' })
}

const getAllUsers = async (req, res) => {
  res.json({ message: 'Get All Users!' })
}

const getUserById = async (req, res) => {
  const { id } = req.params
  res.json({ message: `Get User By Id! User: ${id}` })
}

const getAllWithRole = async (req, res) => {
  const { role } = req.params
  res.json({ message: `Get All Users With Role: ${role}` })
}

const deleteUser = async (req, res) => {
  const { userId } = req.params
  res.json({ message: `Delete User ${userId}!` })
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  getAllWithRole,
  deleteUser
}