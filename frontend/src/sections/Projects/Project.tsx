import styles from './Project.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Projects</h2>

        <div className={styles.grid}>
          {/* Project 1 */}
          <div className={styles.card}>
            <h3>QuickStay</h3>
            <p>
              A full-stack hotel booking platform with a modern UI and
              backend-powered data handling.
            </p>
            <span>React • Tailwind • Django</span>

            <div className={styles.links}>
              <a href="#" target="_blank">GitHub</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className={styles.card}>
            <h3>SkillPulse</h3>
            <p>
              An AI-powered developer skill evaluator that analyzes technical
              strengths and gaps.
            </p>
            <span>FastAPI • ML • Python</span>

            <div className={styles.links}>
              <a href="#" target="_blank">GitHub</a>
            </div>
          </div>

          {/* Project 3 */}
          <div className={styles.card}>
            <h3>Food Recipe Finder</h3>
            <p>
              A web app that filters recipes based on dietary preferences,
              calories, and ingredients.
            </p>
            <span>React • FastAPI • APIs</span>

            <div className={styles.links}>
              <a href="#" target="_blank">GitHub</a>
            </div>
          </div>

          {/* Project 4 */}
          <div className={styles.card}>
            <h3>QuMolBind</h3>
            <p>
              A research-focused project combining quantum reinforcement
              learning with molecular simulations for drug discovery.
            </p>
            <span>Python • ML • Research</span>

            <div className={styles.links}>
              <a href="#" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
