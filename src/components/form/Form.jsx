import styles from "./Form.module.css";

function Form() {
  return (
    <div className={styles.form}>
      <div className={styles.input_field}>
        <label htmlFor="link"> Link </label>
        <input type="text" />
      </div>
      <button> Shorten </button>
    </div>
  );
}

export default Form;
