import Link from "next/link";
import styles from '../../../styles/NavBar.module.css'

function NavBar(props) {
    const { newClass } = props;

    return ( 
        <nav className={`${styles.navbar}`}>
        {/* <nav className={[styles.navbar, newClass]}> */}
            <div className={`${styles[newClass]}`}>

            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/messages/sup">Sup</Link>
            </div>
        </nav>
     );
}

export default NavBar;