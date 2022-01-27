module.exports = {
  title: '安可得博客',
  description: '',
  theme: 'reco',
  base: '/ankelog/', // 设置站点根路径
  repo: 'https://github.com/weianke/ankelog',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  head: [['link', { rel: 'icon', href: '/avatar.png' }]],
  themeConfig: {
    authorAvatar: '/avatar.png',
    author: '安可',
    subSidebar: 'auto',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '学习',
        link: '/test/first',
      },
      {
        text: '安可的Github',
        link: 'https://github.com/weianke',
      },
    ],
  },
};
