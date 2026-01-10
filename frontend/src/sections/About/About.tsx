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
              I am a final-year Computer Science and Engineering student with honors in Data Science, passionate about Artificial Intelligence, Machine Learning, and Full Stack Development. Over the course of my academic journey, I have gained hands-on experience through internships in full-stack development, machine learning, and research, which have strengthened my problem-solving skills and technical expertise.
            </p>

            <p>
              Beyond academics, I actively contribute to the community as the Chairperson of ISTE SC and as a member of social initiatives like Forengers Foundation (CRW) and Yuvti Vibhag, where I focus on leadership, collaboration, and social impact. I thrive at the intersection of technology and innovation, building scalable software solutions, working on impactful projects, and constantly exploring new avenues to learn and grow.
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
