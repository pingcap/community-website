import React from "react";
import styles from "./EventsItem.module.scss";

export default function EventsItem({imageUrl, title, summary}) {
  return (
    <div className={styles.list_item}>
      <div className={styles.list_item_image}>
        <img src={imageUrl} alt={title}/>
      </div>
      <div className={styles.list_item_title}>
        {title}
      </div>
      <div className={styles.list_item_summary}>
        {summary}
      </div>
    </div>
  )
}
