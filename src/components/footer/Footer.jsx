import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <p> Terms & Conditions </p>
        <p> Privacy Policy </p>
        <p> Cookie Policy </p>
      </div>
      <div className={styles.login}>
        <p> Rebrandly @ Copyright 2020</p>
      </div>
    </div>
  );
}

export default Footer;
