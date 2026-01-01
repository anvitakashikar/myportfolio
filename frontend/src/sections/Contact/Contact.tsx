import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Contact</h2>

        <p className={styles.text}>
          I’m open to internships, full-time roles, collaborations,
          and interesting tech conversations.
        </p>

        <div className={styles.links}>
          <a href="mailto:your.email@example.com">Email</a>
          <a href="https://github.com/yourusername" target="_blank">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
