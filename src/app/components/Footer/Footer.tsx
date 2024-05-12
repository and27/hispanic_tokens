import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Creado con ❤️ por{" "}
      <a
        href="https://andresbanda.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Andrés B.
      </a>
    </footer>
  );
};
export default Footer;
