import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__body}>
        <Link to="/">
          <button className={styles.header__allcats}>Все котики</button>
        </Link>
        <button className={styles.header__favorite}>
          <Link to="/favorite">Любимые котики</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
