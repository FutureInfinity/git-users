/* eslint-disable no-console */
/* eslint-disable no-useless-escape */
/* eslint-disable object-curly-spacing */
import { Command, flags } from '@oclif/command'
import DB from '../utils/db'
import { selectUserList } from '../utils/cli'

export default class Delete extends Command {
  static description = 'Delete User'

  static examples = [
    `$ gu delete
     $ ? select a user (Use arrow keys)
     $ > JhonDoe
User JhonDoe Deleted Successfully!
`,
    `$ gu delete JhonDoe
User JhonDoe Deleted Successfully!
`,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [{ name: 'name', required: false, description: 'User Name, eg :- JhonDoe' }]

  async run() {
    const { args } = this.parse(Delete)

    // trim and remove whitespaces
    let Username: string = args.name

    // eslint-disable-next-line no-negated-condition
    if (!Username) {
      Username = await selectUserList()
      if (!Username) {
        this.error('No Users Exist!')
        return
      }
    } else {
      Username = Username.replace(/\s+/g, '')
    }

    const db = new DB()
    // Check If User Exists And Delete
    if (db.delete(Username)) {
      this.log(`User ${Username} Deleted Successfully!`)
      return
    }

    this.error(`User ${Username} Dont Exist`)
  }
}
