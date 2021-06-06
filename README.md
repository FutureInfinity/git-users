git-users
=========

Multiple Git Users

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/git-users.svg)](https://npmjs.org/package/git-users)
[![Downloads/week](https://img.shields.io/npm/dw/git-users.svg)](https://npmjs.org/package/git-users)
[![License](https://img.shields.io/npm/l/git-users.svg)](https://github.com/mrhyperbit/git-users/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g git-users
$ gu COMMAND
running command...
$ gu (-v|--version|version)
git-users/0.0.1 win32-x64 node-v16.3.0
$ gu --help [COMMAND]
USAGE
  $ gu COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`gu add [NAME] [EMAIL]`](#gu-add-name-email)
* [`gu delete [NAME]`](#gu-delete-name)
* [`gu help [COMMAND]`](#gu-help-command)
* [`gu user`](#gu-user)

## `gu add [NAME] [EMAIL]`

Add New Git User

```
USAGE
  $ gu add [NAME] [EMAIL]

ARGUMENTS
  NAME   User Name, eg :- JhonDoe
  EMAIL  User Email, eg :- jhondoe@gmail.com

OPTIONS
  -h, --help  show CLI help

EXAMPLES
  $ gu add
        $ User Name: Jhon Doe
        $ User Email: Jhondoe@gmail.com
  User JhonDoe Added Successfully!

  $ gu add JhonDoe jhondoe@gmail.com
  User JhonDoe Added Successfully!
```

_See code: [src/commands/add.ts](https://github.com/mrhyperbit/git-users/blob/v0.0.1/src/commands/add.ts)_

## `gu delete [NAME]`

Delete User

```
USAGE
  $ gu delete [NAME]

ARGUMENTS
  NAME  User Name, eg :- JhonDoe

OPTIONS
  -h, --help  show CLI help

EXAMPLES
  $ gu delete
        $ ? select a user (Use arrow keys)
        $ > JhonDoe
  User JhonDoe Deleted Successfully!

  $ gu delete JhonDoe
  User JhonDoe Deleted Successfully!
```

_See code: [src/commands/delete.ts](https://github.com/mrhyperbit/git-users/blob/v0.0.1/src/commands/delete.ts)_

## `gu help [COMMAND]`

display help for gu

```
USAGE
  $ gu help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `gu user`

Get or Set Local Git User

```
USAGE
  $ gu user

OPTIONS
  -h, --help   show CLI help
  -l, --local

EXAMPLES
  $ gu user -l
  Current Local Git User Is JhonDoe!

  $ gu user -local 
  Current Local Git User Is JhonDoe!

  $ gu user
  User JhonDoe Set Locally!
```

_See code: [src/commands/user.ts](https://github.com/mrhyperbit/git-users/blob/v0.0.1/src/commands/user.ts)_
<!-- commandsstop -->
