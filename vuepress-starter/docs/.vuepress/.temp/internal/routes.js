export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Documents/Github/blog-websites/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Hello VuePress"} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"E:/Documents/Github/blog-websites/vuepress-starter/docs/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":"About"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"E:/Documents/Github/blog-websites/vuepress-starter/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Getting Started"} }],
  ["/guide/configuration/", { loader: () => import(/* webpackChunkName: "guide_configuration_index.html" */"E:/Documents/Github/blog-websites/vuepress-starter/docs/.vuepress/.temp/pages/guide/configuration/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/Documents/Github/blog-websites/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
