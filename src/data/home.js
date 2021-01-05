import common from './common'

const imagesDir = common.imagesDir + '/home/'

export default {
  en: {
    banner: {
      title: 'Connect the Dot, Code the Future',
      summary: 'TiDB is An open-source, cloud-native, distributed SQL database for elastic scale and real-time analytics',
    },
    announcement: [
      // 'Tom becomes a new contributor',
      // 'Cw1997 becomes a new contributor',
      // 'Test becomes a new contributor',
      // 'User becomes a new contributor',
      // 'Admin becomes a new contributor',
      
      // {
      //   name: '',
      //   content: 'Tom becomes a new contributor',
      //   link: '#',
      // },
      // {
      //   name: '',
      //   content: 'Cw1997 becomes a new contributor',
      //   link: '#',
      // },
      // {
      //   name: '',
      //   content: 'Test becomes a new contributor',
      //   link: '#',
      // },
      // {
      //   name: '',
      //   content: 'User becomes a new contributor',
      //   link: '#',
      // },
      // {
      //   name: '',
      //   content: 'Admin becomes a new contributor',
      //   link: '#',
      // },
    ],
  
    feature: {
      title: 'Community Value',
      summary: 'The TiDB Community Organization brings together development enthusiasts interested in TiDB and surrounding open source software to explore the future of distributed databases using TiDB as a hands-on project.',
      items: [
        {
          summary: 'Create a de facto standard for distributed databases',
        },
        {
          summary: 'Lead the direction of distributed database technology development',
        },
        {
          summary: 'Become an industry expert in the field of distributed databases',
        },
      ],
    },
    
    star: {
      title: 'Community Star',
      summary: 'The TiDB Community Organization brings together development enthusiasts interested in TiDB and surrounding open source software to explore the future of distributed databases using TiDB as a hands-on project.',
      items: [
        {
          imageUrl: `${imagesDir}star-icon.svg`,
          name: 'Tom Black',
          summary: 'Getting to know tidb source code',
          content: '11111111111111 The TiDB Community Organization brings together development enthusiasts interested in TiDB and surrounding open source software to explore the future of distributed databases using TiDB as a Each SIG is comprised of members from multiple companies and organizations, with a common purpose of advancing the project with respect to a specific topic.',
        },
        {
          imageUrl: `${imagesDir}star-icon.svg`,
          name: 'Tom Black',
          summary: 'Getting to know tidb source code',
          content: '22222222222222 The TiDB Community Organization brings together development enthusiasts interested in TiDB and surrounding open source software to explore the future of distributed databases using TiDB as a Each SIG is comprised of members from multiple companies and organizations, with a common purpose of advancing the project with respect to a specific topic.',
        },
        {
          imageUrl: `${imagesDir}star-icon.svg`,
          name: 'Tom Black',
          summary: 'Getting to know tidb source code',
          content: '33333333333333 The TiDB Community Organization brings together development enthusiasts interested in TiDB and surrounding open source software to explore the future of distributed databases using TiDB as a Each SIG is comprised of members from multiple companies and organizations, with a common purpose of advancing the project with respect to a specific topic.',
        },
        {
          imageUrl: `${imagesDir}star-icon.svg`,
          name: 'Tom Black',
          summary: 'Getting to know tidb source code',
          content: '444444444444 The TiDB Community Organization brings together development enthusiasts interested in TiDB and surrounding open source software to explore the future of distributed databases using TiDB as a Each SIG is comprised of members from multiple companies and organizations, with a common purpose of advancing the project with respect to a specific topic.',
        },
      ]
    },
  
    grow: {
      title: 'Grow In TiDB Community',
      items: [
        {
          imageUrl: `${imagesDir}grow-step-1.svg`,
          step: 1,
          title: 'Contributor',
          summary: '贡献量从 0 - 1 新手入门',
        },
        {
          imageUrl: `${imagesDir}grow-step-2.svg`,
          step: 2,
          title: 'Active Contributor',
          summary: '社区积极分子',
        },
        {
          imageUrl: `${imagesDir}grow-step-3.svg`,
          step: 3,
          title: 'Reviewer',
          summary: '代码审阅者',
        },
        {
          imageUrl: `${imagesDir}grow-step-4.svg`,
          step: 4,
          title: 'Committer',
          summary: '模块老司机',
        },
        {
          imageUrl: `${imagesDir}grow-step-5.svg`,
          step: 5,
          title: 'Maintainer',
          summary: '开源推广者',
        },
      ]
    },
  
    SIG: {
      title: 'Popular SIG',
      summary: 'Special Interest Group，专项兴趣小组，主要负责 TiDB / TiKV 某个模块的开发和维护工作，对该模块代码的质量负责',
      items: [
        {
          imageUrl: `${imagesDir}sig-icon.svg`,
          title: 'TiDB DDL Index',
          summary: 'DDL Index covers the TiDB DDL and parser',
        },
        {
          imageUrl: `${imagesDir}sig-icon.svg`,
          title: 'TiDB DDL Index',
          summary: 'DDL Index covers the TiDB DDL and parser',
        },
        {
          imageUrl: `${imagesDir}sig-icon.svg`,
          title: 'TiDB DDL Index',
          summary: 'DDL Index covers the TiDB DDL and parser',
        },
      ]
    },
  
    // TODO: normal form, reference data from events
    events: {
      title: 'Upcoming Events',
      items: [
        {
          imageUrl: `${imagesDir}event-tidb-hackathon2020-62c1c40e7dd9eb4a0eed8d00ea6507e5.svg`,
          title: 'High Performance TiDB Challenge',
          summary: 'Getting to know tidb source code and finding the way to join the development.The articles in the tidb source code reading series introduces the overall architecture of tidb, knowing which modules tidb has, what it does, where to start, which can be ignored and which needs to be read carefully.',
        },
        {
          imageUrl: `${imagesDir}event-high-performance-tidb-challenge-ff7cb0ab67af3592ef7f1fe66151630c.svg`,
          title: 'TiDB Usability Challenge',
          summary: 'Getting to know tidb source code and finding the way to join the development.The articles in the tidb source code reading series introduces the overall architecture of tidb, knowing which modules tidb has, what it does, where to start, which can be ignored and which needs to be read carefully.',
        },
        {
          imageUrl: `${imagesDir}event-pingcap-infra-meetup.svg`,
          title: 'Infra Meetup',
          summary: 'Getting to know tidb source code and finding the way to join the development.The articles in the tidb source code reading series introduces the overall architecture of tidb, knowing which modules tidb has, what it does, where to start, which can be ignored and which needs to be read carefully.',
        },
      ]
    },
  
    learningMaterials: {
      title: 'Learning Materials',
      items: [
        {
          imageUrl: '#',
          title: 'TiDB Source Code Reading Series',
          summary: 'Getting to know tidb source code and finding the way to join the development.The articles in the tidb source code reading series introduces the overall architecture of tidb, knowing which modules tidb has, what it does, where to start, which can be ignored and which needs to be read carefully.',
        },
        {
          imageUrl: '#',
          title: 'Talent Plan',
          summary: 'Talent Plan is an open source training program initiated by PingCAP. It aims to create or combine some open source learning materials for people interested in open source, distributed systems, Rust, Golang, and other infrastructure knowledges. As such, a series of courses focused on open source collaboration, rust programming, distributed database and systems are provided.',
        },
      ]
    }
  }
}
