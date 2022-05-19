import { useState } from "react";
import styles from "./Form.module.css";

function Form({ createLink }) {
  const [linkInput, setLinkInput] = useState("");
  const [slugInput, setSlugInput] = useState("");

  const shortenHandler = () => {
    createLink({
      link: linkInput,
      slug: slugInput,
    });
  };

  return (
    <div className={styles.form}>
      <input
        value={linkInput}
        type="text"
        placeholder="Make your links shorter"
        onChange={(e) => setLinkInput(e.target.value)}
      />
      <input
        value={slugInput}
        type="text"
        placeholder="Custom slug"
        onChange={(e) => setSlugInput(e.target.value)}
      />
      <button className={styles.shorten_button} onClick={shortenHandler}>
        Shorten URL
      </button>
    </div>
  );
}

export default Form;
