module.exports = {
  title: '安可得博客',
  description: '安可得博客',
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  themeConfig: {
    logo: '/avatar.png',
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
    ]
  },
};
