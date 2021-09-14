import common from './common'
import events from "src/data/events";

const imagesDir = common.imagesDir + '/home/'

const en = {
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
      // summary: 'The TiDB Community Organization brings together development enthusiasts interested in TiDB and surrounding open source software to explore the future of distributed databases using TiDB as a hands-on project.',
      items: [
      {
        title: 'Building',
        summary: 'Develop Database Standards',
      },
      {
        title: 'Learning',
        summary: 'Learning Knowledge and Skills',
      },
      {
        title: 'Sharing',
        summary: 'Sharing Best Practices',
      },
      {
        title: 'Growing',
        summary: 'Become a Database Expert',
      },
    ],
  },
  
  star: {
    title: 'Community Star',
      summary: 'We will show the new community contributors of Committer level and above here.',
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
        urlPath: 'contributor'
      },
      {
        imageUrl: `${imagesDir}grow-step-2.svg`,
        step: 2,
        title: 'Active Contributor',
        urlPath: 'active-contributor'
      },
      {
        imageUrl: `${imagesDir}grow-step-3.svg`,
        step: 3,
        title: 'Reviewer',
        urlPath: 'reviewer'
      },
      {
        imageUrl: `${imagesDir}grow-step-4.svg`,
        step: 4,
        title: 'Committer',
        urlPath: 'committer'
      },
      {
        imageUrl: `${imagesDir}grow-step-5.svg`,
        step: 5,
        title: 'Maintainer',
        urlPath: 'maintainer'
      },
    ]
  },
  
  // TODO: normal form, reference data from events
  events: {
    title: 'Upcoming Events',
      items: events.en.items.slice(0, 3),
  },
  
  learningMaterials: {
    title: 'Learning Materials',
      items: [
      {
        imageUrl: '#',
        title: 'TiDB Source Code Reading Series',
        summary: 'Getting to know tidb source code and finding the way to join the development.The articles in the tidb source code reading series introduces the overall architecture of tidb, knowing which modules tidb has, what it does, where to start, which can be ignored and which needs to be read carefully.',
        link: 'https://pingcap.com/blog-cn/#TiDB-%e6%ba%90%e7%a0%81%e9%98%85%e8%af%bb',
      },
      {
        imageUrl: '#',
        title: 'Talent Plan',
        summary: 'Talent Plan is an open source training program initiated by PingCAP. It aims to create or combine some open source learning materials for people interested in open source, distributed systems, Rust, Golang, and other infrastructure knowledges. As such, a series of courses focused on open source collaboration, rust programming, distributed database and systems are provided.',
        link: 'https://university.pingcap.com/talent-plan/',
      },
    ]
  }
}

export default {
  en,
  zh: en,
}
