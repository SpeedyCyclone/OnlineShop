import { useRouter } from "next/router";
import styles from "./styles/Buy.module.css";

function Price() {
  const router = useRouter();
  const { price, id } = router.query;
  const final = parseInt(price) + 10;
  return (
    <>
      <form action="/" method="post" className={styles.form}>
        <div className={styles.inputgroup}>
          <label>Full Name</label>
          <input
            type="text"
            name="title"
            id="name"
            placeholder="John Doe"
            required
          />
        </div>
        <div className={styles.inputgroup}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
            required
          />
        </div>
        <div className={styles.inputgroup}>
          <label>Address</label>
          <textarea
            name="description"
            id="msg"
            cols="30"
            rows="10"
            required
            placeholder="Lorem ipsum dolor sit..."
          ></textarea>
        </div>
        <div className={styles.inputgroup}>
          <label>Mobile Number</label>
          <input
            name="price"
            type="number"
            label="Price per night"
            placeholder="(+91)"
            required
          />
        </div>

        <div className={styles.inputgroup}>
          <label>City</label>
          <input
            name="beds"
            type="text"
            label="Price per night"
            placeholder="Lorem"
            required
          />
        </div>

        <div className={styles.inputgroup}>
          <label>Pin Code</label>
          <input
            name="baths"
            type="number"
            label="Price per night"
            placeholder="000000"
            required
          />
        </div>

        <div className={styles.flex}>
          <h1 className={styles.price}>Price of Product: ${price}</h1>
          <h2 className={styles.delivery}>
            Delivery Charge: $10 (rounded off)
          </h2>
          <h1 className={styles.total}>Total Price: ${final}</h1>
        </div>
        <div className={styles.inputgroup}>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Price;
