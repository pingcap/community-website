const prefixMemberPath = '/people'

export default {
  en: {
    navbar: {
      title: 'DevGroup',
      homeLink: '/',
      linkList: [
        {
          title: 'People',
          children: [
            {
              title: 'Maintainer',
              link: `${prefixMemberPath}/maintainer`
            },
            {
              title: 'Committer',
              link: `${prefixMemberPath}/committer`
            },
            {
              title: 'Reviewer',
              link: `${prefixMemberPath}/reviewer`
            },
            {
              title: 'Active Contributor',
              link: `${prefixMemberPath}/active-contributor`
            },
            {
              title: 'Contributor',
              link: `${prefixMemberPath}/contributor`
            },
          ]
        },
        {
          title: 'SIG',
          link: '/SIG/',
        },
        {
          title: 'Incubator',
          link: '/incubator',
        },
        {
          title: 'Events',
          link: '/events',
        },
        {
          title: 'Ranking',
          link: '/ranking',
        },
        {
          title: 'Jobs',
          link: 'https://pingcap.com/community-cn/careers/join/',
        },
      ],
    },
    
  },
  
  zh: {
    navbar: {
      title: '开发者社区',
      homeLink: '/zh',
      linkList: [
        {
          title: '开发者',
          children: [
            {
              title: 'Maintainer',
              link: `${prefixMemberPath}/maintainer`
            },
            {
              title: 'Committer',
              link: `${prefixMemberPath}/committer`
            },
            {
              title: 'Reviewer',
              link: `${prefixMemberPath}/reviewer`
            },
            {
              title: 'Active Contributor',
              link: `${prefixMemberPath}/active-contributor`
            },
            {
              title: 'Contributor',
              link: `${prefixMemberPath}/contributor`
            },
          ]
        },
        {
          title: 'SIG',
          link: '/SIG/',
        },
        {
          title: '孵化器',
          link: '/zh/incubator',
        },
        {
          title: '社区活动',
          link: '/events',
        },
        {
          title: '贡献排名',
          link: '/ranking',
        },
        {
          title: '名企直推',
          link: 'https://pingcap.com/community-cn/careers/join/',
        },
      ],
    },
    
  },
}
