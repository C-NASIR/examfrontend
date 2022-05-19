import styles from "./DisplayLink.module.css";

function Displaylink({ link, slug }) {
  return (
    <div className={styles.Displaylink}>
      <p> {link} ======= </p>
      <p> {slug}</p>
    </div>
  );
}

export default Displaylink;
