import styles from './Home.module.css';

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.content}>
        <h1>
          Hi, I’m <span>Anvita</span>
        </h1>

        <h2>Final-Year Computer Engineering Student</h2>

        <p>
          I’m a passionate developer focused on building clean, user-centric
          web applications and exploring intelligent systems through hands-on
          projects in full-stack development and machine learning.
        </p>


        {/* CTA */}
        <div className={styles.cta}>
          <a href="#projects" className={styles.primaryBtn}>
            View Projects
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            Get In Touch
          </a>
        </div>

        {/* Socials */}
        <div className={styles.socials}>
          <a href="https://github.com/anvitakashikar" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/anvita-kashikar-94196b2a5/" target="_blank">LinkedIn</a>
          <a href="mailto:anvitakashikar29@gmail.com">Email</a>
        </div>
      </div>

      {/* Glow */}
      <div className={styles.glow} />

      {/* Scroll hint */}
      <div className={styles.scrollHint}>Scroll ↓</div>
    </section>
  );
};

export default Home;
