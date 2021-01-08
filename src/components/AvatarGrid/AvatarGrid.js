import React from "react";
import './AvatarGrid.scss'

// const avatarPath = `images/cache/github-avatar/xiongjiwei.png`
// const avatarUrl = require(avatarPath)
// const avatarUrl = require('images/cache/github-avatar/xiongjiwei.png')
// import avatarUrl from 'images/cache/github-avatar/xiongjiwei.png'


export default function AvatarGrid({members}) {
  members = members.slice(0, 9)
  const node = members.map(item => {
    const avatarUrl = `/cache/github-avatar/${item}.png`
    console.log('avatarUrl', avatarUrl)
    // console.log('avatarPath', avatarPath)
    return <img src={avatarUrl} alt=""/>
  })
  const className = `AvatarGrid`
  return (
    <div className={className}>
      {node}
    </div>
  )
}
