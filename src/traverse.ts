import * as babylon from 'babylon'
import * as traverse from '@babel/traverse'

const ast: any = babylon.parse('1 + 2 * (3 + 5)')

const visitor: traverse.Visitor = {
  BinaryExpression: (nodePath: traverse.NodePath) => {
    console.log(nodePath.node)
  }
}

traverse.default(ast, visitor)
