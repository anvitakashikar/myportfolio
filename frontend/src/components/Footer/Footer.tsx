import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} Anvita Kashikar. All rights reserved.
      </p>

      <div className={styles.links}>
        <a href="https://github.com/yourusername" target="_blank">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
