import styles from "./DisplayLink.module.css";

function Displaylink({ link, slug }) {
  return (
    <div className={styles.Displaylink}>
      <p> {link} </p>
      <p> {"    ==>    "}</p>
      <p> {slug}</p>
      <button className={styles.copy_button}> Copy </button>
    </div>
  );
}

export default Displaylink;
