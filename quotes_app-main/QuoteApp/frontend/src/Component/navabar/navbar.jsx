import React from 'react';
import styles from '../navabar/navbar.module.css';
function Navbar() {
    const navbar_data = [
      {'id': 1, 'text': 'Home', 'url': '/'},
      {'id': 2, 'text': 'About', 'url': '/about'},
      {'id': 3, 'text': 'Services', 'url': '/services'},
    ];
  
    return (
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {navbar_data.map((item) => (
            <li key={item.id} className={styles.li}>
              <a href={item.url} className={styles.a}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  