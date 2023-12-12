import Image from "next/image";
import gif from "../../../../public/congrats.gif";
import styles from "./card.module.css";
import back from "../../../../public/back.png";

const Card = () => (
  <>
    <a className={`${styles.card}`} target="_blank" rel="noopener noreferrer">
      <div className={styles.front}>
        {/* <div className={styles.badge}>
          <p>Tarea finalizada</p>
        </div> */}
        <Image
          src="/back.png"
          className={styles.backgroundImage}
          alt=""
          fill={true}
        />
        <Image
          src="/logoN.png"
          alt="Hispanic Network Community Logo"
          className={styles.logo}
          width={120}
          height={120}
          priority
        />
        <p className={styles.subheading}>Felicitaciones</p>
        <h2>Carolina Barale</h2>
        <p className={styles.descriptionLarge}>Tarea #3 completa</p>
        <p>5 de mayo de 2023</p>
        <p className={styles.description}>LLevas 3 tareas completadas</p>
      </div>

      <div className={styles.back}>
        <h2>¡Gran trabajo!</h2>

        <Image
          src={gif}
          width={200}
          height={200}
          alt=""
          style={{ borderRadius: "150px" }}
        />
        <p className={styles.description}>hispanicgroup.com</p>
      </div>
    </a>
  </>
);

export default Card;
