import Header from "./header";
import styles from "./layout.module.css";

export const siteTitle = "mt7rk";

export default function Layout({ children, home }) {
    return (
        <div>
            <header className={styles.header}>
                <Header />
            </header>
        </div>
    );
}
