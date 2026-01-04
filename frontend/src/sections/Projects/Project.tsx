import styles from './Project.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Projects</h2>

        <div className={styles.grid}>
          {/* Project 3 */}
          <div className={styles.card}>
            <h3>Multi-task Modelling</h3>
            <span></span>

            <p>
              A web app that filters recipes based on dietary preferences,
              calories, and ingredients.
            </p>
           

            <div className={styles.links}>
              <a href="#" target="_blank">GitHub</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className={styles.card}>
            <h3>Detection of Retinal Disease</h3>
            <span>
              <i>Python, TensorFlow (Keras), Teachable Machine, Google Colab</i>
            </span>
            <p>
              Developed a Retinal Disease Detection system using supervised machine learning techniques to analyze 
              and classify retinal images. The project leverages deep learning models such as CNNs for feature 
              extraction from medical images and integrates additional classification approaches to improve accuracy.
            </p>
            <div className={styles.links}>
              <a href="https://github.com/anvitakashikar/Detection_Retinaldisease" target="_blank">GitHub</a>
            </div>
        </div>

          {/* Project 1 */}
          <div className={styles.card}>
            <h3>Color Detection</h3>
            <span>
              <i>Python, TensorFlow (Keras), Teachable Machine, Google Colab</i>
            </span>
            <p>
              Built a Color Detection system as an introductory machine learning project using Teachable Machine 
              and a Keras model powered by TensorFlow. The model was trained to classify colors and developed using 
              Google Colab for efficient cloud-based experimentation.
            </p>

            <div className={styles.links}>
              <a href="https://github.com/anvitakashikar/Color_Detection" target="_blank">GitHub</a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
