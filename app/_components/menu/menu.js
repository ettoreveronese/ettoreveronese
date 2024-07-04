import React from 'react';
import styles from "./menu.module.css";

export default function Menu({ menu }) {
  return (
    <div className={styles.menu}>
      <ul>
        {menu.map((menuItem, index) => ( 
          <li key={index}><a href={menuItem.link}>{menuItem.content}</a></li>  
        ))}
      </ul>
    </div>
  ); 
}
