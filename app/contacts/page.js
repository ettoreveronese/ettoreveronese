import styles from "./page.module.css";
import Menu from "../_components/menu/menu.js";

const contacts = [{content: "gmail", link: ""}, {content: "x", link: ""}, {content: "instagram", link: ""}];
export default function Contacts() {
  return (
    <main className={styles.main}>
      <Menu menu={contacts}></Menu> 
    </main>
  );
}
