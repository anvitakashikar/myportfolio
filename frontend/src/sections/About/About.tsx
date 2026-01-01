import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About Me</h2>

        <div className={styles.grid}>
          {/* Left content */}
          <div className={styles.text}>
            <p>
              I’m a final-year Computer Engineering student with a strong interest
              in building scalable, user-focused applications. I enjoy working
              across the full stack and experimenting with machine learning
              concepts through practical projects.
            </p>

            <p>
              I’m particularly drawn to projects that combine clean UI,
              thoughtful backend design, and data-driven decision making. I’m
              always curious about how systems work end-to-end.
            </p>

            <p>
              Currently, I’m focused on strengthening my fundamentals, building
              impactful projects, and preparing for software development roles.
            </p>
          </div>

          {/* Right highlights */}
          <div className={styles.highlights}>
            <div className={styles.card}>
              <h3>Education</h3>
              <p>
                B.E. Computer Engineering<br />
                Honors in Data Science & ML
              </p>
            </div>

            <div className={styles.card}>
              <h3>Core Interests</h3>
              <p>
                Full Stack Development<br />
                Machine Learning<br />
                System Design
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className={styles.skills}>
          <div className={styles.skillCard}>
            <h4>Programming Languages</h4>
            <p>Python, C++</p>
          </div>

          <div className={styles.skillCard}>
            <h4>Libraries & Frameworks</h4>
            <p>
              ReactJS, NumPy, Pandas, Matplotlib, Scikit-learn,
              FastAPI, Streamlit
            </p>
          </div>

          <div className={styles.skillCard}>
            <h4>Tools & Platforms</h4>
            <p>
              Git, Canva, Jupyter, Figma, Kaggle,
              Google Colab, Vertex AI
            </p>
          </div>

          <div className={styles.skillCard}>
            <h4>Databases</h4>
            <p>MySQL, MongoDB, Neo4J, SQLAlchemy</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
