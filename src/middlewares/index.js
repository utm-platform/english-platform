const checkHasAdminPrivileges = require('./checkHasAdminPrivileges')
const checkHasTeacherPrivileges = require('./checkHasTeacherPrivileges')
const checkUserToken = require('./checkUserToken')
const checkValidations = require('./checkValidations')
const handleErrors = require('./handleErrors')

module.exports = {
  checkHasAdminPrivileges,
  checkHasTeacherPrivileges,
  checkUserToken,
  checkValidations,
  handleErrors,
}