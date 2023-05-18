import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { useRouter } from "next/router";
import styles from "./styles/Products.module.css";
import Image from "next/image";
import Link from "next/link";

export async function getStaticPaths() {
  const product = await prisma.Product.findMany({
    select: { id: true },
  });

  return {
    paths: product.map((product) => ({
      params: { id: product.id },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const product = await prisma.Product.findUnique({
    where: { id: params.id },
  });

  if (product) {
    return {
      props: JSON.parse(JSON.stringify(product)),
    };
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}

export default function Product(product = null) {
  const router = useRouter();
  if (router.isFallback) {
    return "Loading...";
  }
  var final = product.category.replaceAll(/'/g, "");
  var final1 = final.split(" ").join("");
  return (
    <>
      <h1 className={styles.title}>{product?.title}</h1>
      <center>
        <h2 className={`${final1}`}>{product?.category}</h2>
      </center>

      <center>
        <Image
          src={product?.image}
          alt=""
          height={500}
          width={500}
          className={styles.img}
        ></Image>{" "}
      </center>

      <p className={styles.description}>{product?.description}</p>
      <h1 className={styles.price}>${product?.price}</h1>
      <center>
        <Link
          href={{
            pathname: "/product/buy",
            query: { id: product.id, price: product.price },
          }}
          className="link"
        >
          <button className={styles.button}>Buy Now</button>
        </Link>
      </center>
    </>
  );
}
