export default {
  // 标题
  title: 'Tired but going on-Blog of Zwh20081',
  // 音乐接口
  musicAPI: 'https://api.hlo.li/music/playlist/detail?id=7490559834',
  // 一言接口（可选，填写后会显示在subtitle)
  hitokitoAPI: 'https://api.hlo.li/music/playlist/detail?id=7490559834',
  // 静态资源位置（可选）
  static: 'https://cdn.jsdelivr.net/gh/tsukiseele/awsl.re/static',
  // base64编码的Github token
  token: 'Z2hwX2dJSzc0VTcxVnJJMHZqd2Uzc3ZEMVpEM2QzaHgxSzBKNFNtMA==',
  // Github OAuth口令，參見https://vssue.js.org/guide/github.html#config-and-start-your-vssue
  oAuth: {
    // Pre
    clientId: '470a7b6c072df5cedab6',
    clientSecret: 'd803f71d288f58ddfa8f36a6e27afc1cda504c81',
  },
  // 博客配置，考慮到GFW，建議不要直接在Issue插入圖片，請使用外鏈以 提升速度和穩定性
  blog: {
    // Github 用户名
    username: 'zwh20081',
    // Github 存储文章的仓库名
    repository: 'work of a failure',
    // 每頁顯示的文章數
    paginationSize: 8,
  },
  // 评论配置，雖然評論可以和文章儲存在同一倉庫，但是考慮到需要過濾且影響可讀性，所以請不要這麽做
  vssue: {
    owner: 'zwh20081',
    repo: 'comment',
  },
  // 导航
  nav: {
    // title: 'さとうしお',
    title: 'Dream home, warm house',
    subtitle: "zwh20081's Blog",
    owner: 'zwh20081',
    introduction: 'Pointless intro, Useless',
    introductionFrom: '--me',
    decorateText: 'ALIVE',
    drawer: false,
    drawerBannerBackground: 'https://cdn.jsdelivr.net/gh/tsukiseele/ImageHosting/upload/826f66f94e3ebf1f62cff7c9109bb118.jpeg',
    nav: [
      { name: 'Home', icon: 'home', to: '/' },
      { name: 'Project', icon: 'project', to: '/projects' },
      { name: 'Blog', icon: 'blog', to: '/post' },
      // { name: 'Experience', icon: 'experience', to: '/experience' },
      { name: 'About', icon: 'about', to: '/about' },
    ],
    links: [
      { icon: 'github', to: 'https://github.com/zwh20081' },
      { icon: 'twitter', to: 'https://twitter.com/zwh20081' },
      { icon: 'mail', to: 'mailto:zwh20081@qq.com' },
    ],
  },
  // 页面元数据
  meta: [
    {
      charset: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1.0,maximum-scale=1,minimum-scale=1,user-scalable=no',
    },
    {
      hid: 'description',
      name: 'description',
      content: '我的blog，为了存在而存在着',
    },
  ],
  backgroundTheme: 'madras',
  sideTheme: 'tartan'
  // backgroundThemes: [
  //   'cicada-stripes',
  //   'arrows',
  //   'zig-zag',
  //   'weave',
  //   'upholstery',
  //   'starry-night',
  //   'carbon',
  //   'carbon-fibre',
  //   'hearts',
  //   'argyle',
  //   'steps',
  //   'stars',
  //   'japanese-cube',
  //   'bricks',
  //   'polka-dot',
  //   'checkerboard',
  //   'diagonal-checkerboard',
  //   'tartan',
  //   'lined-paper',
  //   'blueprint-grid',
  //   'tablecloth',
  //   'honeycomb',
  //   'wave',
  //   'pyramid',
  //   'chocolate-weave',
  //   'cross-dots',
  //   'madras',
  // ],
}
