import React from "react";
import './AvatarGrid.scss'

export default function AvatarGrid({members}) {
  members = members.slice(0, 9)
  const className = `AvatarGrid`
  return (
    <div className={className}>
      {members.map(item => <img src={`https://github.com/${item}.png`} alt=""/>)}
    </div>
  )
}
