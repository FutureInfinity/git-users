import DB from '../utils/db'
import * as inquirer from 'inquirer'
import * as notifier from 'node-notifier'

export async function selectUserList() {
  const lowdb = new DB()
  const users = Object.keys(lowdb.stormdb.state)
  if (users.length === 0) {
    notifier.notify({
      title: 'No Users Found',
      message: '0 Users Exists',
    })
    return null
  }
  const responses: any = await inquirer.prompt([{
    name: 'user',
    message: 'select a user',
    type: 'list',
    choices: users,
  }])
  return responses.user
}
