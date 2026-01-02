import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} Anvita Kashikar. All rights reserved.
      </p>

      <div className={styles.links}>
        <a href="https://github.com/anvitakashikar" target="_blank">
          GitHub
        </a>
        <a href="https://linkedin.com/in/anvita-kashikar-94196b2a5/" target="_blank">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
