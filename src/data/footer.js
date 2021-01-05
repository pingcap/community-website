const footerColumns = [
  [
    {
      name: 'Community',
      items: [
        {
          name: 'TiKV',
          link: 'https://tikv.org/',
          outbound: true,
        },
        {
          name: 'Slack',
          link: 'https://slack.tidb.io/invite?team=tidb-community&channel=everyone',
          outbound: true,
        },
        {
          name: 'AskTUG',
          link: 'https://asktug.com/',
          outbound: true,
        },
        {
          name: 'Mailing List',
          link: 'https://lists.tidb.io/g/main/subgroups',
          outbound: true,
        },
        {
          name: 'Chaos Mesh®',
          link: 'https://chaos-mesh.org/',
          outbound: true,
        },
      ],
    },
  ],

  [
  
    {
      name: 'Resources',
      items: [
        {
          name: 'Quick Start',
          link: 'https://docs.pingcap.com/tidb/stable/quick-start-with-tidb',
          outbound: true,
        },
        {
          name: 'Best Practices',
          link: 'https://docs.pingcap.com/tidb/stable/tidb-best-practices',
          outbound: true,
        },
        {
          name: 'FAQs',
          link: 'https://docs.pingcap.com/tidb/stable/tidb-faq',
          outbound: true,
        },
        {
          name: 'Release Notes',
          link: 'https://docs.pingcap.com/tidb/stable/release-notes',
          outbound: true,
        },
        {
          name: 'Blog',
          link: 'https://en.pingcap.com/blog',
          outbound: true,
        },
        {
          name: 'GitHub',
          link: 'https://github.com/pingcap/tidb',
          outbound: true,
        },
      ],
    },
  ],

  [
    {
      name: 'Learning',
      items: [
        {
          name: 'Docs',
          link: 'https://docs.pingcap.com/tidb/stable',
          outbound: true,
        },
        {
          name: 'Case Studies',
          link: 'https://en.pingcap.com/case-studies/',
        },
        {
          name: 'PingCAP University',
          link: 'https://university.pingcap.com/',
          outbound: true,
        },
        {
          name: 'TiDB in Action',
          link: 'https://book.tidb.io/',
          outbound: true,
        },
      ],
    },
  ],
  
]

const footerColumnsZh = [
  [
    {
      name: '产品',
      items: [
        {
          name: 'TiDB',
          link: 'https://docs.pingcap.com/zh/tidb/v4.0',
          outbound: true,
        },
        {
          name: '周边工具',
          link: 'https://docs.pingcap.com/zh/tools',
          outbound: true,
        },
      ],
    },
  ],

  [
    {
      name: '资源',
      items: [
        {
          name: '快速上手',
          link: 'https://docs.pingcap.com/zh/tidb/stable/quick-start-with-tidb',
          outbound: true,
        },
        {
          name: '最佳实践',
          link: 'https://docs.pingcap.com/zh/tidb/stable/tidb-best-practices',
          outbound: true,
        },
        {
          name: '常见问题解答',
          link: 'https://docs.pingcap.com/zh/tidb/stable/tidb-faq',
          outbound: true,
        },
        {
          name: '版本发布',
          link: 'https://docs.pingcap.com/zh/tidb/dev/release-notes',
          outbound: true,
        },
        {
          name: '联合解决方案',
          link: 'https://pingcap.com/solutions/intel/',
          outbound: true,
        },
        {
          name: '博客',
          link: '/blog',
        },
        {
          name: 'Github',
          link: 'https://github.com/pingcap',
          outbound: true,
        },
      ],
    },
  ],

  [
    {
      name: '学习',
      items: [
        {
          name: '文档',
          link: 'https://docs.pingcap.com/zh/tidb/v4.0/',
          outbound: true,
        },
        {
          name: '案例',
          link: '/case-studies',
        },
        {
          name: 'PingCAP University',
          link: 'https://university.pingcap.com/',
          outbound: true,
        },
        {
          name: 'TiDB in Action',
          link: 'https://book.tidb.io/',
          outbound: true,
        },
        {
          name: '社区活动',
          link: 'https://pingcap.com/community-cn/',
          outbound: true,
        },
      ],
    },
  ],

  [
    {
      name: '支持',
      items: [
        {
          name: 'AskTUG 论坛',
          link: 'https://asktug.com/',
          outbound: true,
        },
        {
          name: '联系我们',
          link: '/contact-us',
        },
        {
          name: '资源支持',
          link: 'https://docs.pingcap.com/zh/tidb/stable/support',
          outbound: true,
        },
      ],
    },
  ],
  [
    {
      name: '公司',
      items: [
        {
          name: '关于我们',
          link: '/about',
        },
        {
          name: '招贤纳士',
          link: 'https://job.pingcap.com/',
          outbound: true,
        },
        {
          name: '新闻报道',
          link: 'https://pingcap.com/about-cn/news',
          outbound: true,
        },
        {
          name: '隐私声明',
          link: '/privacy-policy',
        },
      ],
    },
  ],
]

const footerColumnsMap = {
  zh: footerColumnsZh,
  en: footerColumns,
}

export { footerColumns, footerColumnsZh }

export default footerColumnsMap
