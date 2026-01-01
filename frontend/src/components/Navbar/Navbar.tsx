import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const sections = ['home', 'about', 'projects', 'contact'];

const Navbar = () => {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (!el) return;

        const top = el.offsetTop - 80;
        const height = el.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>Anvita<span>.</span></div>

        <nav className={styles.navLinks}>
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={active === section ? styles.active : ''}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
