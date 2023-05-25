const createGroup = async (req, res) => {
  res.json({ message: 'Create Group!' })
}

const getAllGroups = async (req, res) => {
  res.json({ message: 'Get All Groups!' })
}

const getGroupById = async (req, res) => {
  const { id } = req.params
  res.json({ message: `Get Group By Id! Group: ${id}` })
}

const addStudentToGroup = async (req, res) => {
  const { groupId, studentId } = req.params
  res.json({ message: `Add Student ${studentId} to Group ${groupId}!` })
}

const removeStudentFromGroup = async (req, res) => {
  const { groupId, studentId } = req.params
  res.json({ message: `Remove Student ${studentId} from Group ${groupId}!` })
}

const addTeacherToGroup = async (req, res) => {
  const { groupId, teacherId } = req.params
  res.json({ message: `Add Teacher ${teacherId} to Group ${groupId}!` })
}

const removeTeacherFromGroup = async (req, res) => {
  const { groupId, teacherId } = req.params
  res.json({ message: `Remove Teacher ${teacherId} from Group ${groupId}!` })
}

const deleteGroup = async (req, res) => {
  const { groupId } = req.params
  res.json({ message: `Delete Group ${groupId}!` })
}

module.exports = {
  createGroup,
  getAllGroups,
  getGroupById,
  addStudentToGroup,
  removeStudentFromGroup,
  addTeacherToGroup,
  removeTeacherFromGroup,
  deleteGroup
}