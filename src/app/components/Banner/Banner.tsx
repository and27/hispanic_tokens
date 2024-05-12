import styles from "./banner.module.css";

const Banner = () => {
  return (
    <section className={styles.banner}>
      Encuentra más info sobre nuestros talleres de oratoria y liderazgo en:{" "}
      <a
        href="https://hispanicgroup.com/proyecto-mae/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Motívate a educarte
      </a>
    </section>
  );
};

export default Banner;
