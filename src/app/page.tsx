import styles from "./page.module.css";
import Card from "./components/Card/Card";
import Social from "./components/Social/Social";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container_inner}>
          <Social />
          <Card />
        </div>
      </main>
    </>
  );
}
