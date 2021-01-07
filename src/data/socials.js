import React from "react";
import {
  GithubOutlined,
  TwitterOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  SlackOutlined,
  YoutubeOutlined,
} from '@ant-design/icons'

const followSocials = [
  {
    name: 'github',
    href: 'https://github.com/pingcap',
    icon: <GithubOutlined />,
  },
  {
    name: 'twitter',
    href: 'https://twitter.com/PingCAP',
    icon: <TwitterOutlined />
  },
  {
    name: 'facebook',
    href: 'https://facebook.com/pingcap2015',
    icon: <FacebookOutlined />,
  },
  {
    name: 'linkedin',
    href: 'https://linkedin.com/company/pingcap',
    icon: <LinkedinOutlined />,
  },
  {
    name: 'slack',
    href: 'https://slack.tidb.io/invite?team=tidb-community&channel=everyone&ref=pingcap',
    icon: <SlackOutlined />,
  },
  {
    name: 'youtube',
    href: 'https://youtube.com/channel/UCuq4puT32DzHKT5rU1IZpIA',
    icon: <YoutubeOutlined />,
  },
]

const shareSocials = (link, title) => [
  {
    name: 'twitter',
    href: `https://twitter.com/intent/tweet?text=${title}&url=${link}`,
  },
  {
    name: 'facebook',
    href: `https://facebook.com/sharer/sharer.php?u=${link}`,
  },
  {
    name: 'linkedin',
    href: `https://linkedin.com/shareArticle?mini=true&url=${link}&title=${title}`,
  },
  {
    name: 'reddit',
    href: `https://reddit.com/submit?url=${link}&title=${title}`,
  },
  {
    name: 'yc',
    href: `https://news.ycombinator.com/submitlink?u=${link}&t=${title}`,
  },
]

export { followSocials, shareSocials }
