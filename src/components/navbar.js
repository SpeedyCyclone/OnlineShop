import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar(active) {
  return (
    <>
      <div className={styles.flex}>
        <Link href="/">
          <Image
            src="/favicon.jpeg"
            alt=""
            width={100}
            height={100}
            className={styles.img}
          ></Image>
        </Link>
        <nav className={styles.navbar}>
          <ul>
            <Link href="/" className="link">
              <li>Home</li>
            </Link>
            <Link href="/products" className="link">
              <li>Products</li>
            </Link>
            <Link href="/contact" className="link">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}
