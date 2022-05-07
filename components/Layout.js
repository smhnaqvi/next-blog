import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Head from "next/head";

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Programmer Blog</title>
                <meta name={'keywords'} content={'web development'}/>
            </Head>
            <div>
                <Nav/>
                <div className={styles.container}>
                    <main className={styles.main}>
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}

export default Layout