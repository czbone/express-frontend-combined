import * as shell from 'shelljs'

shell.cd('./frontend')
shell.exec('yarn install')
shell.exec('yarn build')