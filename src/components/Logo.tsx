import styles from "./Logo.module.scss";
import cx from "classnames";

export default function Logo({ isPrimaryLogo }: { isPrimaryLogo?: boolean }) {
  const Element = isPrimaryLogo ? "h1" : "div";
  return (
    <>
      <a className={styles.logoLink} href="/">
        <Element
          className={cx(styles.logo, { [styles.logoWhite]: !isPrimaryLogo })}
        >
          Millennials <span>of</span> <br />
          <span className={styles.logoWherever}>Wherever</span>
        </Element>
      </a>
    </>
  );
}
