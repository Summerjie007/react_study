(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{480:function(t,s,a){t.exports=a.p+"assets/img/18.26a6e405.jpg"},481:function(t,s,a){t.exports=a.p+"assets/img/19.851bca4a.jpeg"},482:function(t,s,a){t.exports=a.p+"assets/img/20.1416ddab.jpeg"},602:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"三、模块系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、模块系统"}},[t._v("#")]),t._v(" 三、模块系统")]),t._v(" "),s("p",[t._v("学习目标")]),t._v(" "),s("p",[t._v("●理解模块化编程方式")]),t._v(" "),s("p",[t._v("●掌握模块通信规则")]),t._v(" "),s("p",[t._v("●知道模块的三种分类")]),t._v(" "),s("p",[t._v("●了解模块加载过程")]),t._v(" "),s("p",[t._v("什么是模块化")]),t._v(" "),s("p",[t._v("当你的网站开发越来越复杂代码越来越多的时候会经常遇到什么问题？")]),t._v(" "),s("p",[t._v("●恼人的命名冲突")]),t._v(" "),s("p",[t._v("●繁琐的文件依赖")]),t._v(" "),s("p",[t._v("历史上，JavaScript 一直没有模块（module）体系， 无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。 其他语言都有这项功能，比如 Ruby 的 require、Python 的 import ， 甚至就连 CSS 都有 @import ，但是 JavaScript 任何这方面的支持都没有，这对开发大型的、复杂的项目形成了巨大障碍。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(480),alt:"img"}})]),t._v(" "),s("blockquote",[s("p",[t._v("现实角度（手机、电脑、活动板房）：\n●生产效率高\n●可维护性好\n程序角度（就是把大一个文件中很多的代码拆分到不同的小文件中，每个小文件就称之为一个模块，例如我们看到的 jQuery 真正的源码）\n●开发效率高（不需要在一个文件中翻来翻去，例如 jQuery 不可能在一个文件写 1w+ 代码，按照功能划分到不同文件中）\n●可维护性好（哪个功能出问题，直接定位该功能模块即可）")])]),t._v(" "),s("p",[t._v("模块化的概念有了，那程序中的模块到底该具有哪些特性就满足我们的使用了呢？")]),t._v(" "),s("p",[t._v("●模块作用域")]),t._v(" "),s("p",[t._v("○好处就是模块不需要考虑全局命名空间冲突的问题")]),t._v(" "),s("p",[t._v("●模块通信规则")]),t._v(" "),s("p",[t._v("○所有模块如果都是封闭自然不行，我们需要让组件与组件相互组织联系起来，例如 CPU 需要读取内存中的数据来进行计算，然后把计算结果又交给了我们的操作系统")]),t._v(" "),s("p",[t._v("○所以我们的模块也是需要具有通信的能力的")]),t._v(" "),s("p",[t._v("○所谓的通信说白了也就是输入与输出")]),t._v(" "),s("p",[t._v("下面我们具体来看一下在 Node.js 中如何在多模块之间进行输入与输出。")]),t._v(" "),s("h2",{attrs:{id:"模块通信规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块通信规则"}},[t._v("#")]),t._v(" 模块通信规则")]),t._v(" "),s("h3",{attrs:{id:"require-模块导入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#require-模块导入"}},[t._v("#")]),t._v(" "),s("code",[t._v("require")]),t._v(" 模块导入")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 核心模块")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第三方模块")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// npm install marked")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" marked "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"marked"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用户模块（自己写的），正确的，正确的方式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意：加载自己写的模块，相对路径不能省略 ./")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./foo.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用户模块（自己写的），正确的（推荐），可以省略后缀名 .js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"exports-模块导出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exports-模块导出"}},[t._v("#")]),t._v(" exports 模块导出")]),t._v(" "),s("p",[t._v("导出多个成员：写法一（麻烦，不推荐）：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导出多个成员：写法一")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("456")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("789")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("导出多个成员：写法二（推荐）")])]),t._v(" "),s("p",[t._v("Node 为了降低开发人员的痛苦，所以为 "),s("code",[t._v("module.exports")]),t._v(" 提供了一个别名 "),s("code",[t._v("exports")]),t._v(" （下面协大等价于上面的写法）。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => true")]),t._v("\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("456")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("789")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("导出多个成员：写法三（代码少可以，但是代码一多就不推荐了）")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// module.exports = {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   d: 'hello',")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   e: 'world',")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   fn: function () {")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     //")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     // fs.readFile(function () {")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     // })")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   }")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n")])])]),s("p",[s("strong",[t._v("导出单个成员：（唯一的写法）：")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导出单个成员：错误的写法")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因为每个模块最终导出是 module.exports 而不是 exports 这个别名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// exports = function (x, y) {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   return x + y")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导出单个成员：必须这么写")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("注意：导出单个只能导出一次，下面的情况后者会覆盖前者：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以这个为准，后者会覆盖前者")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"为什么-exports-xxx-不行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么-exports-xxx-不行"}},[t._v("#")]),t._v(" 为什么 "),s("code",[t._v("exports = xxx")]),t._v(" 不行")]),t._v(" "),s("p",[t._v("exports 和 module.exports 的一个引用：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每个模块内部有一个 module 对象")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// module 对象中有一个成员 exports 也是一个对象")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" module "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("exports")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模块中同时还有一个成员 exports 等价于 module.exports")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这样是可以的，因为 exports === module.exports")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// module.exports.a = 123")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// exports.b = 456")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里重新赋值不管用，因为模块最后 return 的是 module.exports")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// exports = function () {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这才是正确的方式")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后导出的是 module.exports")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ret "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"exports-和-module-exports-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exports-和-module-exports-的区别"}},[t._v("#")]),t._v(" exports 和 module.exports 的区别")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("exports 和 module.exports 的区别")])]),t._v(" "),s("li",[s("ul",[s("li",[t._v("每个模块中都有一个 module 对象")])])]),t._v(" "),s("li",[s("ul",[s("li",[t._v("module 对象中有一个 exports 对象")])])]),t._v(" "),s("li",[s("ul",[s("li",[t._v("我们可以把需要导出的成员都挂载到 module.exports 接口对象中")])])]),t._v(" "),s("li",[s("ul",[s("li",[t._v("也就是："),s("code",[t._v("moudle.exports.xxx = xxx")]),t._v(" 的方式")])])]),t._v(" "),s("li",[s("ul",[s("li",[t._v("但是每次都 "),s("code",[t._v("moudle.exports.xxx = xxx")]),t._v(" 很麻烦，点儿的太多了")])])]),t._v(" "),s("li",[s("ul",[s("li",[t._v("所以 Node 为了你方便，同时在每一个模块中都提供了一个成员叫："),s("code",[t._v("exports")])])])]),t._v(" "),s("li",[s("ul",[s("li",[s("code",[t._v("exports === module.exports")]),t._v(" 结果为 "),s("code",[t._v("true")])])])]),t._v(" "),s("li",[s("ul",[s("li",[t._v("所以对于："),s("code",[t._v("moudle.exports.xxx = xxx")]),t._v(" 的方式 完全可以："),s("code",[t._v("expots.xxx = xxx")])])])]),t._v(" "),s("li",[s("ul",[s("li",[t._v("当一个模块需要导出单个成员的时候，这个时候必须使用："),s("code",[t._v("module.exports = xxx")]),t._v(" 的方式")])])]),t._v(" "),s("li",[s("ul",[s("li",[t._v("不要使用 "),s("code",[t._v("exports = xxx")]),t._v(" 不管用")])])]),t._v(" "),s("li",[s("ul",[s("li",[t._v("因为每个模块最终向外 "),s("code",[t._v("return")]),t._v(" 的是 "),s("strong",[t._v("module.exports")])])])]),t._v(" "),s("li",[s("ul",[s("li",[t._v("而 "),s("code",[t._v("exports")]),t._v(" 只是 "),s("code",[t._v("module.exports")]),t._v(" 的一个引用")])])]),t._v(" "),s("li",[s("ul",[s("li",[t._v("所以即便你为 "),s("code",[t._v("exports = xx")]),t._v(" 重新赋值，也不会影响 "),s("code",[t._v("module.exports")])])])]),t._v(" "),s("li",[s("ul",[s("li",[t._v("但是有一种赋值方式比较特殊："),s("code",[t._v("exports = module.exports")]),t._v(" 这个用来重新建立引用关系的")])])]),t._v(" "),s("li",[s("ul",[s("li",[t._v("之所以让大家明白这个道理，是希望可以更灵活的去用它")])])])]),t._v(" "),s("h3",{attrs:{id:"特殊的导出方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特殊的导出方式"}},[t._v("#")]),t._v(" 特殊的导出方式")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"默认函数被调用了"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("ajax")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ajax 方法被调用了"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get 方法被调用了"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"模块分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块分类"}},[t._v("#")]),t._v(" 模块分类")]),t._v(" "),s("p",[t._v("在开始了解具体的规则之前，我们先来了解一下在 Node 中对不模块的一个具体分类，一共就三种类别：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("核心模块")])]),t._v(" "),s("li",[s("ul",[s("li",[t._v("由 Node 本身提供，具名的，例如 fs 文件操作模块、http 网络操作模块")])])]),t._v(" "),s("li",[s("p",[t._v("第三方模块")])]),t._v(" "),s("li",[s("ul",[s("li",[t._v("由第三方提供，使用的时候我们需要通过 npm 进行下载然后才可以加载使用，例如我们使用过的 "),s("code",[t._v("mime")]),t._v("、"),s("code",[t._v("art-template")]),t._v("、"),s("code",[t._v("marked")])])])]),t._v(" "),s("li",[s("ul",[s("li",[t._v("注意：不可能有第三方包的名字和核心模块的名字是一样的，否则会造成冲突")])])]),t._v(" "),s("li",[s("p",[t._v("用户模块（自己写的）")])]),t._v(" "),s("li",[s("ul",[s("li",[t._v("我们在文件中写的代码很多的情况下不好编写和维护，所以我们可以考虑把文件中的代码拆分到多个文件中，那这些我们自己创建的文件就是用户模块")])]),t._v(" "),s("p",[t._v("核心模块")])])]),t._v(" "),s("p",[t._v("参考文档："),s("a",{attrs:{href:"https://nodejs.org/dist/latest-v9.x/docs/api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://nodejs.org/dist/latest-v9.x/docs/api/"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("●核心模块就是 node 内置的模块，需要通过唯一的标识名称来进行获取。\n●每一个核心模块基本上都是暴露了一个对象，里面包含一些方法供我们使用\n●一般在加载核心模块的时候，变量的起名最好就和核心模块的标识名同名即可\n○例如：const fs = require('fs')\n●核心模块本质上也是文件模块\n○核心模块已经被编译到了 node 的可执行程序，一般看不到\n○可以通过查看 node 的源码看到核心模块文件\n○核心模块也是基于 CommonJS 模块规范")]),t._v(" "),s("p",[t._v("Node 中都以具名的方式提供了不同功能的模块，例如操作文件就是：fs")]),t._v(" "),s("p",[t._v("核心模块（系统模块）由 Node 提供，使用的时候都必须根据特定的核心模块名称来加载使用。例如使用文件操作模块：fs")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fs.readFile")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fs.writeFile")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fs.appendFile")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("模块名称")]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"https://nodejs.org/dist/latest-v9.x/docs/api/fs.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("fs"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("文件操作")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://nodejs.org/dist/latest-v9.x/docs/api/http.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("网络操作")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://nodejs.org/dist/latest-v9.x/docs/api/path.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("path"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("路径操作")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://nodejs.org/dist/latest-v9.x/docs/api/url.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("url"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("url 地址操作")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://nodejs.org/dist/latest-v9.x/docs/api/os.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("os"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("操作系统信息")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://nodejs.org/dist/latest-v9.x/docs/api/net.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("net"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("一种更底层的网络操作方式")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://nodejs.org/dist/latest-v9.x/docs/api/querystring.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("querystring"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("解析查询字符串")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://nodejs.org/dist/latest-v9.x/docs/api/util.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("util"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("工具函数模块")])])])]),t._v(" "),s("h3",{attrs:{id:"文件模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件模块"}},[t._v("#")]),t._v(" 文件模块")]),t._v(" "),s("p",[t._v("以 "),s("code",[t._v("./")]),t._v(" 或 "),s("code",[t._v("../")]),t._v(" 开头的模块标识就是文件模块，一般就是用户编写的。")]),t._v(" "),s("h3",{attrs:{id:"第三方模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三方模块"}},[t._v("#")]),t._v(" 第三方模块")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("moment")])]),t._v(" "),s("li",[s("p",[t._v("marked")])]),t._v(" "),s("li",[s("p",[t._v("...")])])]),t._v(" "),s("p",[t._v("一般就是通过 "),s("code",[t._v("npm install")]),t._v(" 安装的模块就是第三方模块。")]),t._v(" "),s("p",[t._v("加载规则如下：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("如果不是文件模块，也不是核心模块")])]),t._v(" "),s("li",[s("p",[t._v("node 会去 node_modules 目录中找（找跟你引用的名称一样的目录），例如这里 "),s("code",[t._v("require('underscore')")])])]),t._v(" "),s("li",[s("p",[t._v("如果在 node_modules 目录中找到 "),s("code",[t._v("underscore")]),t._v(" 目录，则找该目录下的 "),s("code",[t._v("package.json")]),t._v(" 文件")])]),t._v(" "),s("li",[s("p",[t._v("如果找到 "),s("code",[t._v("package.json")]),t._v(" 文件，则找该文件中的 "),s("code",[t._v("main")]),t._v(" 属性，拿到 main 指定的入口模块")])]),t._v(" "),s("li",[s("p",[t._v("如果过程都找不到，node 则取上一级目录下找 "),s("code",[t._v("node_modules")]),t._v(" 目录，规则同上。。。")])]),t._v(" "),s("li",[s("p",[t._v("如果一直找到代码文件的根路径还找不到，则报错。。。")])])]),t._v(" "),s("blockquote",[s("p",[t._v("注意：对于第三方模块，我们都是 "),s("code",[t._v("npm install")]),t._v(" 命令进行下载的，就放到项目根目录下的 "),s("code",[t._v("node_modules")]),t._v(" 目录。")])]),t._v(" "),s("h2",{attrs:{id:"深入模块加载机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#深入模块加载机制"}},[t._v("#")]),t._v(" 深入模块加载机制")]),t._v(" "),s("h3",{attrs:{id:"简单流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单流程"}},[t._v("#")]),t._v(" 简单流程")]),t._v(" "),s("p",[s("img",{attrs:{src:a(481),alt:"img"}})]),t._v(" "),s("h3",{attrs:{id:"详细流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#详细流程"}},[t._v("#")]),t._v(" 详细流程")]),t._v(" "),s("p",[s("img",{attrs:{src:a(482),alt:"img"}})]),t._v(" "),s("p",[t._v("简而言之，如果 require 绝对路径的文件，查找时不会去遍历每一个 node_modules 目录，其速度最快。其余流程如下：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("从 module path 数组中取出第一个目录作为查找基准。")])]),t._v(" "),s("li",[s("p",[t._v("直接从目录中查找该文件，如果存在，则结束查找。如果不存在，则进行下一条查找。")])]),t._v(" "),s("li",[s("p",[t._v("尝试添加.js、.json、.node 后缀后查找，如果存在文件，则结束查找。如果不存在，则进行下一条。")])]),t._v(" "),s("li",[s("p",[t._v("尝试将 require 的参数作为一个包来进行查找，读取目录下的 package.json 文件，取得 main 参数指定的文件。")])]),t._v(" "),s("li",[s("p",[t._v("尝试查找该文件，如果存在，则结束查找。如果不存在，则进行第 3 条查找。")])]),t._v(" "),s("li",[s("p",[t._v("如果继续失败，则取出 module path 数组中的下一个目录作为基准查找，循环第 1 至 5 个步骤。")])]),t._v(" "),s("li",[s("p",[t._v("如果继续失败，循环第 1 至 6 个步骤，直到 module path 中的最后一个值。")])]),t._v(" "),s("li",[s("p",[t._v("如果仍然失败，则抛出异常。")])])]),t._v(" "),s("p",[t._v("整个查找过程十分类似原型链的查找和作用域的查找。所幸 Node.js 对路径查找实现了缓存机制，否则由于每次判断路径都是同步阻塞式进行，会导致严重的性能消耗。")])])}),[],!1,null,null,null);s.default=e.exports}}]);