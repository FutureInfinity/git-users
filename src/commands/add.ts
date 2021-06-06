/* eslint-disable no-useless-escape */
/* eslint-disable object-curly-spacing */
import { Command, flags } from '@oclif/command'
import DB from '../utils/db'
import cli from 'cli-ux'

export default class Add extends Command {
  static description = 'Add New Git User'

  static examples = [
    `$ gu add
     $ User Name: Jhon Doe
     $ User Email: Jhondoe@gmail.com
User JhonDoe Added Successfully!
`,
    `$ gu add JhonDoe jhondoe@gmail.com
User JhonDoe Added Successfully!
`,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [{ name: 'name', required: false, description: 'User Name, eg :- JhonDoe' }, { name: 'email', required: false, description: 'User Email, eg :- jhondoe@gmail.com' }]

  async run() {
    const { args } = this.parse(Add)

    // trim and remove whitespaces
    let Username: string = args.name

    let email: string = args.email

    if (!Username || !email) {
      Username = await cli.prompt('User Name')
      email = await cli.prompt('User Email')
    }

    // check if valid email
    if (!new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email)) {
      this.warn('Invalid Email!')
      return
    }
    // add user to json
    // console.log(this.config)
    const db = new DB()
    if (db.add({ name: Username.replace(/\s+/g, ''), email: email })) {
      this.log(`User ${Username} Added Successfully!`)
      return
    }

    this.warn(`User ${Username} Already Exists`)
  }
}
