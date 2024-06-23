import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "全栈鹏的杂货铺",
  description: "专注于编程技术的积累,分享,实践.",
  lastUpdated: true,
  themeConfig: {
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://qiniu.867007845.top/202404082216252.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide' },
      {
        text: '博客',
        link: '/blog/',
      },
      {
        text: '后端',
        items: [
          { text: 'Java', link: '/java/' },
          { text: 'Python', link: '/python/' },
          { text: 'Go', link: '/go/' }
        ]
      },
      {
        text: '前端',
        items: [
          { text: 'React', link: '/react/' },
          { text: 'Vue', link: '/vue/' },
          { text: 'Angular', link: '/angular/' }
        ]
      },
      {
        text: '运维',
        items: [
          { text: 'Linux', link: '/linux/' },
          { text: 'Docker', link: '/docker/' },
          { text: 'K8S', link: '/k8s/' }
        ]
      },
      {
        text: '其他',
        items: [
          { text: '一些想法', link: '/thinks/' },
          { text: '未来愿景', link: '/future/' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: 'Markdown Examples', link: '/guide/' },
            { text: 'Runtime API Examples', link: '/guide/api-examples' }
          ]
        }],
        '/java/': [
        {
          text: 'Java',
          items: [
            { text: '关于Java知识库的简介', link: '/java/' },
          ]
        }],
        '/python/': [
        {
          text: 'Python',
          items: [
            { text: '关于Python知识库的简介', link: '/python/' },
          ]
        }],
        '/go/': [
        {
          text: 'Go',
          items: [
            { text: '关于Go知识库的简介', link: '/go/' },
          ]
        }],
        '/react/': [
        {
          text: 'React',
          items: [
            { text: '关于React知识库的简介', link: '/react/' },
          ]
        }],
        '/vue/': [
        {
          text: 'Vue',
          items: [
            { text: '关于Vue知识库的简介', link: '/vue/' },
          ]
        }],
        '/angular/': [
        {
          text: 'Angular',
          items: [
            { text: '关于Angular知识库的简介', link: '/angular/' },
          ]
        }],
        '/linux/': [
        {
          text: 'Linux',
          items: [
            { text: '关于Linux知识库的简介', link: '/linux/' },
          ]
        }],
        '/docker/': [
        {
          text: 'Docker',
          items: [
            { text: '关于Docker知识库的简介', link: '/docker/' },
          ]
        }],
        '/k8s/': [
        {
          text: 'K8S',
          items: [
            { text: '关于K8S知识库的简介', link: '/k8s/' },
          ]
        }],
        '/blog/': [
        {
          text: '博客内容同步',
          items: [
            { text: '关于我的博客的介绍', link: '/blog/' },
          ]
        }],
        '/thinks/': [
        {
          text: '一些想法',
          items: [
            { text: '想法存储库', link: '/thinks/' },
          ]
        }],
        '/future/': [
        {
          text: '未来愿景',
          items: [
            { text: '未来，需要我们亲手创造', link: '/future/' },
          ]
        }],
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
