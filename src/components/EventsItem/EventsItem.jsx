import React from "react";
import styles from "./EventsItem.module.scss";
import BoundLink from "src/components/BoundLink";

export default function EventsItem({imageUrl, title, summary, link}) {
  return (
    <div className={styles.list_item}>
      <BoundLink href={link}>
        <div className={styles.list_item_image}>
          <img src={imageUrl} alt={title}/>
        </div>
      </BoundLink>
      <BoundLink href={link}>
        <div className={styles.list_item_title}>
          {title}
        </div>
      </BoundLink>
        <div className={styles.list_item_summary}>
          {summary}
        </div>
    </div>
  )
}
