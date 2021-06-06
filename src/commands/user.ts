import {Command, flags} from '@oclif/command'
import execa = require('execa')
import DB from '../utils/db'
import {isGitInit} from '../utils/file'
import {selectUserList} from '../utils/cli'

export default class User extends Command {
  static description = 'Get or Set Local Git User'

  static examples = [
    `$ gu user -l
Current Local Git User Is JhonDoe!
`,
    `$ gu user -local 
Current Local Git User Is JhonDoe!
`,
    `$ gu user
     $ ? select a user (Use arrow keys)
     $ > JhonDoe
User JhonDoe Set Locally!
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    local: flags.boolean({char: 'l'}),
  }

  async run() {
    const {flags} = this.parse(User)

    const db = new DB()

    if (flags.local) {
      if (isGitInit()) {
        try {
          const {stdout} = await execa('git', ['config', '--local', 'user.name'])
          const email = await execa('git', ['config', '--local', 'user.email'])
          this.log(stdout + ' ' + email.stdout)
          return
        } catch (error: any) {
          if (error.stderr) {
            this.error(error.stderr)
            return
          }
          this.warn('Current Local User Is Not Set')
          // console.log(error)
        }
      } else {
        this.error('git not init!')
      }
    } else {
      const Username = await selectUserList()
      if (!Username) {
        this.error('No Users Exist!')
        return
      }
      // Set as Local Git
      if (isGitInit()) {
        await execa('git', ['config', '--local', 'user.name', Username])
        await execa('git', ['config', '--local', 'user.email', db.get(Username)])
        this.log(`User ${Username} Set Locally!`)
      } else {
        this.error('git not init!')
      }
    }
  }
}
