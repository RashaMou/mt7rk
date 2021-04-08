import Gear from "../public/images/gear.svg";
import Logo from "../public/images/logo.svg";
import styles from "./header.module.css";

export default function Header() {
    return (
        <>
            <div className={styles.logoBox}>
                <Logo />
                <div className={styles.arTitle}>أخبار متحركة</div>
                <div className={styles.title}>/ blog</div>
            </div>
            <div className={styles.headerBorder}>
                <nav className={styles.nav}>
                    <ul className={styles.ul}>
                        <li className={styles.navItem}>
                            <span className={styles.inner}>
                                news /
                                <span className={styles.arText}>أخبار</span>
                            </span>
                        </li>
                        <li className={styles.navItem}>
                            <span className={styles.inner}>
                                reviews /
                                <span className={styles.arText}>مراجعات</span>
                            </span>
                        </li>
                        <li className={styles.navItem}>
                            <span className={styles.inner}>
                                interviews /
                                <span className={styles.arText}>مقابلات</span>
                            </span>
                        </li>
                        <li className={styles.navItem}>
                            <span className={styles.inner}>
                                production /
                                <span className={styles.arText}>إنتاج</span>
                            </span>
                        </li>
                        <li className={styles.navItem}>
                            <span className={styles.inner}>
                                tech /
                                <span className={styles.arText}>تكنولوجيا</span>
                            </span>
                        </li>
                        <li className={styles.navItem}>
                            <span className={styles.inner}>
                                educational /
                                <span className={styles.arText}>علمية</span>
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.rightBox}>
                <Gear />
            </div>
        </>
    );
}
