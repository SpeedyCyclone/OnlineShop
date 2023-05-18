import { PrismaClient } from "@prisma/client";
import styles from "../styles/Product.module.css";
import Grid from "../components/grid";
import { useState } from "react";

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const products = await prisma.product.findMany();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}

export default function Product(props) {
  var products = props.products;
  const [search, setSearch] = useState("");
  let data = products.filter((products) => {
    return (
      products.category.toLowerCase().includes(search.toLowerCase()) == true
    );
  });
  return (
    <>
      <h1 className={styles.product}>Products</h1>
      <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
        <label htmlFor="search" className={styles.search}>
          Search for categories:
        </label>
        <input
          type="text"
          name="search"
          placeholder="Search for categories"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.input}
        />
      </form>
      <div className={styles.flex}>
        <Grid products={data} />
      </div>
    </>
  );
}
