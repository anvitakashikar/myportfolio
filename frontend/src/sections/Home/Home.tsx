import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I’m Anvita
          <span className={styles.wave}>👋</span>
        </h1>

        <p className={styles.subtitle}>
          Final-year Computer Engineering student passionate about
          Full-Stack Development, Data Science, and Machine Learning.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryBtn}>
            View Projects
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
