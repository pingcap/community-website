const prefixMemberPath = '/people'

export default {
  en: {
    navbar: {
      title: 'DevGroup',
      linkList: [
        {
          title: 'People',
          children: [
            {
              title: 'Contributor',
              link: `${prefixMemberPath}/contributor`
            },
            {
              title: 'Active Contributor',
              link: `${prefixMemberPath}/active-contributor`
            },
            {
              title: 'Reviewer',
              link: `${prefixMemberPath}/reviewer`
            },
            {
              title: 'Committer',
              link: `${prefixMemberPath}/committer`
            },
            {
              title: 'Maintainer',
              link: `${prefixMemberPath}/maintainer`
            },
          ]
        },
        {
          title: 'SIG',
          link: '/SIG/',
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
    
  }
}
