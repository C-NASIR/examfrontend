import styles from "./Banner.module.css";
import profileImages from "../../images/profile.png";
function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div>
          <h1>Your Brand on Your Links ®</h1>
        </div>
        <p>
          Rebrandly is the industry-leading link management platform to brand,
          track and share short URLs using a custom domain name{" "}
        </p>
        <div className={styles.content_buttons}>
          <button className={styles.content_signup_button}>Sign up Free</button>
          <button className={styles.content_demo_button}>Request a Demo</button>
        </div>
      </div>
      <div className={styles.profile}>
        <img src={profileImages} alt="Headshot photo of a man" />
      </div>
    </div>
  );
}

export default Banner;
