// 这是 node 中向外暴露成员的方式
// module.exports = {}

// 在 ES6 中也通过规范的形式 ，规定了 ES6 如何 导入和导出模块
// ES 6 中导入模块，使用 import 模块名称 from '模块表示符'  import "表示路径"
// 在 ES6 中使用 export default 和 export 向外暴露成员

var address = {
    msg: "郑州市"
}

export default {
    name: 'zs',
    age: '20',
    address
}

// 注意： export 向外暴露的成员，可以使用任意变量名称来进行接收
//       在一个模块中，export default 只允许向外暴露一次(即，使用一次)，多次暴露不合法
//       在一个模块中， 既可以使用 export default来暴露成员，也可使用 export 来向外暴露成员

export var author = "BEATREE"
export var date = new Date()

// 注意：使用 export 向外暴露的成员，只能使用 {定义相同名称} 来接受，这种形式叫做 **按需导出**
//       如果想换个名称进行使用，可以使用 as 进行别名，然后使用别名进行操作
// 注意：export 可以向外多次暴露，同时如果某些成员，我们在 import 时候不需要，则不需要进行导出


// 在 node 中使用 var 名称 = require('模块标识符')  来导入成员
// 通过 module.exports 和 exports 来暴露成员。