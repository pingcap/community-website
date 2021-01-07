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
