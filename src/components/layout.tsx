import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
