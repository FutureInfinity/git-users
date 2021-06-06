import fs = require('fs')

export function createPath(dir: string) {
  if (!fs.existsSync(dir)) {
    return fs.mkdirSync(dir, {
      recursive: true,
    })
  }
  return false
}

export function isGitInit(): boolean {
  if (fs.existsSync('.git')) {
    return true
  }
  return false
}
