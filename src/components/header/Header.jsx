import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <p> Headway </p>
        <p> features </p>
        <p> pricing </p>
      </div>
      <div className={styles.login}>
        <p> Login</p>
      </div>
    </div>
  );
}

export default Header;
