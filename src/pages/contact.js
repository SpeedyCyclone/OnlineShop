import styles from "../styles/Contact.module.css";

export default function Contact() {
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
          <label>Message</label>
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
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </div>
      </form>
      <div className={styles.proboi}>
        <div className={styles.smallboi}>
          <h1 className={styles.number}>42</h1>
          <h1 className={styles.award}>Awards</h1>
        </div>
        <div className={styles.smallboi}>
          <h1 className={styles.number}>4.9 &#9733;</h1>
          <h1 className={styles.award}>Rating</h1>
        </div>
        <div className={styles.smallboi}>
          <h1 className={styles.number}>1000+</h1>
          <h1 className={styles.award}>Products Sold</h1>
        </div>
        <div className={styles.smallboi}>
          <h1 className={styles.number}>100+</h1>
          <h1 className={styles.award}>Visitors Each Day</h1>
        </div>
      </div>
    </>
  );
}
