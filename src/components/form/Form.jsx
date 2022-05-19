import styles from "./Form.module.css";

function Form() {
  return (
    <div className={styles.form}>
      <input type="text" placeholder="Make your links shorter" />
      <input type="text" placeholder="Custom slug" />
      <button className={styles.shorten_button}> Shorten URL </button>
    </div>
  );
}

export default Form;
