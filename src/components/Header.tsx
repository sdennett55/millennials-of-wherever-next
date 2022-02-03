import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import styles from "./Header.module.scss";
import cx from "classnames";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.navigation}>
        <button
          aria-label="Open Menu"
          id="openMenuBtn"
          className={styles.hamburgerMenuIcon}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 7.5 50 35"
            width="24"
            height="24"
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
          </svg>
        </button>
        <header className={styles.header}>
          <Logo isPrimaryLogo />
        </header>
      </div>
      <nav
        className={cx(styles.hamburgerMenu, {
          [styles.hamburgerMenuIsOpen]: isOpen,
        })}
        id="hamburgerMenuElem"
      >
        <div className={styles.navHeader}>
          <button
            aria-label="Close Menu"
            id="closeMenuBtn"
            className={cx(
              styles.hamburgerMenuIcon,
              styles.hamburgerMenuIconWhite
            )}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              fill="currentColor"
              viewBox="10.69 10.69 18.62 18.62"
              width="24"
              height="24"
            >
              <line
                x1="11.692"
                x2="28.308"
                y1="11.692"
                y2="28.308"
                fill="none"
                strokeWidth="2"
              ></line>
              <line
                x1="28.308"
                x2="11.692"
                y1="11.692"
                y2="28.308"
                fill="none"
                strokeWidth="2"
              ></line>
            </svg>
          </button>
          <Logo />
        </div>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/about">
              <a className={styles.navLink}>About</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/submit-your-story">
              <a className={styles.navLink}>Submit Your Story</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
