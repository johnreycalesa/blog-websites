import "E:/Documents/Github/blog-websites/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "E:/Documents/Github/blog-websites/vuepress-starter/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "E:/Documents/Github/blog-websites/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "E:/Documents/Github/blog-websites/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "E:/Documents/Github/blog-websites/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "E:/Documents/Github/blog-websites/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/index.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
