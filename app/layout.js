import "./globals.css";
import styles from "./layout.module.css"
import Menu from "./_components/menu/menu.js"

export const metadata = {
  title: "Ettore Veronese",
  description: "Ettore's website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}><a href="/ettoreveronese">ettore veronese</a></header>
        {children}
      </body>
    </html>
  );
}
