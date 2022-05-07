import styles from "../styles/Nav.module.css"

export default function Nav() {
    return (<nav className={styles.nav}>
        <a href={"/"}>Home</a>
        <a href={"/blog"}>blog</a>
    </nav>)
}