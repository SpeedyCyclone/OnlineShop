import Card from "../components/card";
import styles from "../styles/Grid.module.css";

export default function Grid({ products = [] }) {
  return (
    <>
      <div className={styles.flex}>
        {products.map((home) => (
          <Card key={home.id} {...home} />
        ))}
      </div>
    </>
  );
}
