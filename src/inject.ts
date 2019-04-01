import * as babel from '@babel/core'
import * as babylon from 'babylon'
import * as trvs from '@babel/traverse'
import * as types from '@babel/types'

const source = 'const hoge = require("hoge")'

const targetId = 'hoge'
const replaceCode = 'require("dummy-code")'

const plugin: babel.PluginItem = ({ types: t, template }) => {
  const ops: trvs.Visitor = {
    VariableDeclarator: (
      nodePath: trvs.NodePath,
      state
    ) => {
      if (t.isIdentifier(nodePath.node.type)) {
      }
    }
  }
  return ops
}
