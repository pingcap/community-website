import React from "react";

import iconGitHub from 'images/socials/github.svg'
import iconTwitter from 'images/socials/twitter.svg'
import iconFacebook from 'images/socials/facebook.svg'
import iconLinkedin from 'images/socials/linkedin.svg'
import iconSlack from 'images/socials/slack.svg'
import iconYoutube from 'images/socials/youtube.svg'

const followSocials = [
  {
    name: 'github',
    href: 'https://github.com/pingcap',
    icon: (<img src={iconGitHub} alt=""/>),
  },
  {
    name: 'twitter',
    href: 'https://twitter.com/PingCAP',
    icon: (<img src={iconTwitter} alt=""/>)
  },
  {
    name: 'facebook',
    href: 'https://facebook.com/pingcap2015',
    icon: (<img src={iconFacebook} alt=""/>),
  },
  {
    name: 'linkedin',
    href: 'https://linkedin.com/company/pingcap',
    icon: (<img src={iconLinkedin} alt=""/>),
  },
  {
    name: 'slack',
    href: 'https://slack.tidb.io/invite?team=tidb-community&channel=everyone&ref=pingcap',
    icon: (<img src={iconSlack} alt=""/>),
  },
  {
    name: 'youtube',
    href: 'https://youtube.com/channel/UCuq4puT32DzHKT5rU1IZpIA',
    icon: (<img src={iconYoutube} alt=""/>),
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
