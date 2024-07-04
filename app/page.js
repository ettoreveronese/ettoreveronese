import styles from "./page.module.css";
import Menu from "./_components/menu/menu.js";

const navbar = [{content: "3dp", link: ""}, {content: "contacts", link: "/ettoreveronese/contacts"}, {content: "about", link: "/ettoreveronese/about"}];
export default function Home() {
  return (
    <main className={styles.main}>
      <Menu menu={navbar}></Menu>
    </main>
  );
}
