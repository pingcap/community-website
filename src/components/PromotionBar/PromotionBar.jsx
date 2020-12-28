import React from "react";
import './PromotionBar.scss'

export default function PromotionBar({data}) {
  return (
    <div className="PromotionBar">
      <ul>
        {data.map(item =>
          <li>
            {item}
          </li>
        )}
      </ul>
    </div>
  )
}
