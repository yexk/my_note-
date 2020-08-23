(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{846:function(t,s,a){"use strict";a.r(s);var n=a(72),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js"}},[t._v("#")]),t._v(" Node.js")]),t._v(" "),a("blockquote",[a("p",[t._v("node 配置，安装的过程就免了。傻瓜式安装。\nnode nvm 安装。")])]),t._v(" "),a("h2",{attrs:{id:"快速入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速入门"}},[t._v("#")]),t._v(" 快速入门")]),t._v(" "),a("blockquote",[a("p",[t._v("node.js 在这里充当一门后台语言，“接收HTTP请求的并提供web页面”的操作。")])]),t._v(" "),a("p",[t._v("快速入门")]),t._v(" "),a("ul",[a("li",[t._v("引入 required 模块：我们可以使用 require 指令来载入 Node.js 模块。")]),t._v(" "),a("li",[t._v("创建服务器：服务器可以监听客户端的请求，类似于 Apache 、Nginx 等 HTTP 服务器。")]),t._v(" "),a("li",[t._v("接收请求与响应请求 服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据。")])]),t._v(" "),a("blockquote",[a("p",[t._v("淘宝的npm镜像： npm install -g cnpm --registry=https://registry.npm.taobao.org")])]),t._v(" "),a("h3",{attrs:{id:"第一步：引入-required-模块，并且在你的项目根目录创建一个server-js文件。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一步：引入-required-模块，并且在你的项目根目录创建一个server-js文件。"}},[t._v("#")]),t._v(" 第一步：引入 required 模块，并且在你的项目根目录创建一个server.js文件。")]),t._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" http "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nhttp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tresponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeHead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/plain'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tresponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello Yexk!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5210")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("打开对应的目录，使用命令："),a("code",[t._v("node server.js")]),t._v(" "),a("img",{attrs:{src:"images/start.jpg",alt:"images/start.jpg"}})]),t._v(" "),a("p",[t._v("访问显示结果：\n"),a("img",{attrs:{src:"images/server.jpg",alt:"images/server.jpg"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);