import Image from "next/image";
import gif from "../../../../public/congrats.gif";
import styles from "./card.module.css";

const Card = () => (
  <>
    <a className={styles.card} target="_blank" rel="noopener noreferrer">
      <div className={styles.badge}>
        <p>Tarea finalizada</p>
      </div>
      <Image
        src="/logo.png"
        alt="Hispanic Network Community Logo"
        className={styles.logo}
        width={120}
        height={120}
        priority
      />
      <p className={styles.subheading}>Otorga a:</p>
      <h2>María Valentina</h2>
      <p className={styles.description}>
        Un reconocimiento de logro por haber completado de manera satisfactoria
        la tarea #3 con su presentación:
      </p>
      <h3>Preséntate a ti mismo.</h3>
    </a>

    <a
      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.badge}></div>
      <Image
        src="/logo.png"
        alt="Hispanic Network Community Logo"
        className={styles.vercelLogo}
        width={120}
        height={120}
        priority
      />

      <h2>Gran trabajo!</h2>

      <Image src={gif} width={200} height={150} alt="" />
      <p>5 de mayo de 2023</p>
    </a>
  </>
);

export default Card;
