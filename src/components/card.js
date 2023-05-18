import styles from "../styles/Card.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Card({
  id = "",
  title = "",
  price = "",
  description = "",
  category = "",
  image = "",
}) {
  var final = category.replaceAll(/'/g, "");
  var final1 = final.split(" ").join("");
  return (
    <>
      <div className={styles.card}>
        <Link href={`/product/${id}`} className={styles.link}>
          <h1 className={styles.title}>{title}</h1>
          <Image
            src={image}
            alt=""
            height={225}
            width={225}
            className={styles.img}
          ></Image>
          <p className={styles.price}>${price}</p>
          <center>
            <h2 className={`${final1}`}>{category}</h2>
          </center>
          <center>
            <button className={styles.button}>Read More</button>
          </center>
        </Link>
      </div>
    </>
  );
}
