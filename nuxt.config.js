export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "MEIMAI MM 美邁車用電子有限公司",
    htmlAttrs: {
      lang: "zh-TW"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: 'keywords', content: '安卓機, 安卓機推薦, 安卓機挑選, 安卓機ptt, 安卓機價格, 安卓機台灣, 安卓機使用說明, 車用多媒體機, 套框機, 安卓框, 行車紀錄器, 行車紀錄器雙錄, 倒車鏡頭, 倒車顯影, 盲點, 盲點偵測, 盲點鏡片, 盲點燈號, 盲點聲音, 車用電子產品'},
      { hid: '美邁車用電子有限公司', name: '美邁車用電子有限公司', content: '美邁車用電子有限公司'},
      { 'http-equiv': 'X-UA-Compatible', content:'ie=edge' },
      { property: 'og:title', content: '美邁車用電子有限公司' },
      { property: 'og:description', content: '美邁車用電子有限公司' },
      { property: 'og:image', content: 'https://www.meimai.com.tw/_nuxt/img/android.6cdf925.png'},
      { property: 'og:site_name', content: '美邁車用電子有限公司' },
      { property: 'og:locale', content: 'zh_TW' },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    script:[{
      crossorigin:"anonymous",
      src:"https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v13.0&appId=541580076291513&autoLogAppEvents=1",
      nonce:"2PC0Scii",
      async:"true",
      defer:"true"
    },
    {
      src:"https://www.googletagmanager.com/gtag/js?id=G-1QLZNF29EP%22",
      async:"true",
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
        "@/assets/css/global.css",
        "@/assets/css/main.scss",
      ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src:"~/plugins/aos.js", mode:"client" },
    "~/plugins/vueAgile.js",
    // { src: '~/plugins/vueAgile.js', mode:"client" }
    { src:"~/plugins/axios.js", mode:"client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/fontawesome"],

  // Fontawesome
  fontawesome: {
    component: "fa",
    icons: {
      solid: true,
      brands: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-agile']
  },
  transition: {
    name: "page",
    mode: "out-in"
  }
};