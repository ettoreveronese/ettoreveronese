import React from 'react';
import styles from "./navbar.module.css";

export default function Menu({ menu }) {
  return (
    <div className={styles.navbar}>
      <ul>
        {menu.map((menuItem, index) => ( 
          <li key={index}><a href={menuItem.link}>{menuItem.content}</a></li>  
        ))}
      </ul>
    </div>
  ); 
}
