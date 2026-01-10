import styles from './Project.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Projects</h2>

        <div className={styles.grid}>
          {/* Project 10 */}
          <div className={styles.card}>
            <h3>SpendWise</h3>
            <span>React, CSS, TypeScript</span>

            <p>
            Developed SpendWise, a personal finance management application users can track income, expenses, and budgets, categorize transactions, and visualize spending patterns.
            </p>


            <div className={styles.links}>
              <a href="https://github.com/anvitakashikar/SpendWise" target="_blank">GitHub</a>
            </div>
          </div>

          {/* Project 9 */}
          <div className={styles.card}>
            <h3>Film Explorer</h3>
            <span>React, CSS, TMDb API (The Movie Database), TypeScript </span>

            <p>
              Built a Film Explorer application using React that allows users to search, browse, and explore movies and TV shows. Integrated the TMDb API to fetch real-time information including ratings, summaries, genres, and release dates.
            </p>


            <div className={styles.links}>
              <a href="https://github.com/anvitakashikar/film-explorer" target="_blank">GitHub</a>
            </div>
          </div>

          {/* Project 8 */}
          <div className={styles.card}>
            <h3>MealMetrics</h3>
            <span>React, CSS, FastAPI, Python, PostgreSQL, SQLAlchemy, JavaScript</span>

            <p>
              Developed a full-stack food ordering application users can browse restaurants, view menus, add items to the cart, and place orders. Implemented secure JWT-based authentication, RESTful APIs, and database integration using SQLAlchemy for efficient data management.
            </p>


            <div className={styles.links}>
              <a href="https://github.com/anvitakashikar/Meal-Metrics" target="_blank">GitHub</a>
            </div>
          </div>

          {/* Project 7 */}
          <div className={styles.card}>
            <h3>MediVault</h3>
            <span>MongoDB, Express, React, Node, Tailwind CSS, Mongoose, Postman</span>

            <p>
            Developed a full-stack hospital management system using the MERN stack to securely manage doctors, patients, appointments, and medical records. Implemented JWT-based authentication, role-based access via an admin dashboard, and efficient appointment scheduling with conflict prevention.
            </p>


            <div className={styles.links}>
              <a href="https://github.com/anvitakashikar/MediVault" target="_blank">GitHub</a>
            </div>
          </div>

          {/* Project 6 */}
          <div className={styles.card}>
            <h3>Weather App</h3>
            <span>React, JavaScript, HTML, CSS, OpenWeather API</span>

            <p>
              Developed a weather application using React that provides real-time weather information based on user-selected locations. Integrated a third-party weather API to fetch current conditions and forecasts, managed application state with React Hooks, and designed a responsive, user-friendly interface for an improved user experience.
            </p>


            <div className={styles.links}>
              <a href="https://github.com/anvitakashikar/Weather-App" target="_blank">GitHub</a>
            </div>
          </div>

          {/* Project 5 */}
          <div className={styles.card}>
            <h3>To do List</h3>
            <span>React, JavaScript, HTML, CSS</span>

            <p>
            Built a responsive to-do list application using React that allows users to add, edit, delete, and manage tasks efficiently. Leveraged React Hooks for state management and implemented local storage to persist tasks, delivering a clean and user-friendly task management experience.
            </p>


            <div className={styles.links}>
              <a href="https://github.com/anvitakashikar/tolist" target="_blank">GitHub</a>
            </div>
          </div>
          {/* Project 4 */}
          <div className={styles.card}>
            <h3>Bank Personal Loan</h3>
            <span>Python, NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn, Jupyter Notebook, Kaggle Datasets</span>

            <p>
              Built a machine learning model to predict customer acceptance of personal loan offers using historical banking data. Applied data preprocessing, feature engineering, and evaluated multiple classification algorithms, selecting the best model based on cross-validation and performance metrics. Designed the solution for deployment to support real-time predictions through an API or cloud-based application.
            </p>


            <div className={styles.links}>
              <a href="https://github.com/anvitakashikar/Bank-Personal-Loan-Modelling" target="_blank">GitHub</a>
            </div>
          </div>

          {/* Project 3 */}
          <div className={styles.card}>
            <h3>Multi-task Modelling</h3>
            <span>Python, TensorFlow, Keras, NumPy, Pandas, Scikit-learn</span>

            <p>
              Developed and implemented machine learning solutions using Python with TensorFlow and Keras for model building and training. Performed data preprocessing, feature engineering, and analysis using NumPy and Pandas, and applied Scikit-learn for model evaluation, validation, and baseline comparisons.
            </p>


            <div className={styles.links}>
              <a href="https://github.com/anvitakashikar/Multi-task-Model" target="_blank">GitHub</a>
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
