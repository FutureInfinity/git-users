/* eslint-disable new-cap */
import StormDB = require('stormdb')
import envPaths from 'env-paths'
import {createPath} from './file'
import * as notifier from 'node-notifier'

// Types
type User = {
  name: string;
  email: string;
}

export default class DB {
  stormdb: any

  constructor() {
    // eslint-disable-next-line eqeqeq
    const DbFileLocation = envPaths('GitUsers', {suffix: ''}).data
    // eslint-disable-next-line no-useless-escape
    createPath(DbFileLocation)

    const engine = new StormDB.localFileEngine(DbFileLocation + '\\users.db')
    this.stormdb = new StormDB(engine)

    // default
    this.stormdb.default({})
  }

  get(Username: string) {
    return this.stormdb.state[Username]
  }

  getUsers() {
    return this.stormdb.get('users')
  }

  add(user: User) {
    // if user already present
    if (!this.get(user.name)) {
      this.stormdb.set(user.name, user.email).save()
      return true
    }
    notifier.notify({
      title: 'User Exists',
      message: `User ${user.name} Already Exists`,
      icon: 'Terminal Icon',
    })
    return false
  }

  delete(Username: string) {
    if (this.get(Username)) {
      this.stormdb.get(Username).delete('Test')
      this.stormdb.save()
      return true
    }
    notifier.notify({
      title: 'User Dont Exist',
      message: `User ${Username} Dont Exists`,
    })
    return false
  }
}
