import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.heading}>About Me</h2>

        <p className={styles.description}>
          I’m a final-year Computer Engineering student at MMCOE with a strong
          interest in full-stack development, data science, and machine learning.
          I enjoy building clean, scalable applications and continuously improving
          my problem-solving skills.
        </p>

        <div className={styles.grid}>
          {/* Skills */}
          <div className={styles.card}>
            <h3>Skills</h3>
            <ul>
              <li>Java, Python, TypeScript</li>
              <li>React, FastAPI, Django</li>
              <li>DSA, OOP, DBMS, OS</li>
              <li>SQL, Git, REST APIs</li>
            </ul>
          </div>

          {/* Education */}
          <div className={styles.card}>
            <h3>Education</h3>
            <p>
              <strong>BE in Computer Engineering</strong><br />
              MMCOE, Pune<br />
              Honors in Data Science & Machine Learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
