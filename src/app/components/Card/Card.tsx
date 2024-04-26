import Image from "next/image";
import gif from "../../../../public/congratsPeople.gif";
import styles from "./card.module.css";
import Link from "next/link";

interface ICardProps {
  name: string;
  task: string;
  date: string;
  totalTasks: number;
}

const Card = async ({ name, task, date, totalTasks }: ICardProps) => {
  return (
    <>
      <a className={`${styles.card}`} target="_blank" rel="noopener noreferrer">
        <div className={styles.front}>
          <Image
            src="/backImage.png"
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
          <p className={styles.subheading}>¡Felicitaciones!</p>
          <h2>{name}</h2>
          <p className={styles.descriptionLarge}>{task}</p>
          <p className={styles.description}>
            Llevas {totalTasks} tareas realizadas.
          </p>
          <p className={styles.footerPhrase}>
            ¡Continúa desafiándote día a día!.
          </p>
        </div>

        <div className={styles.back}>
          <Image
            src="/back2.png"
            className={styles.backBackgroundImage}
            alt=""
            fill={true}
          />
          <h2>¡Gran trabajo!</h2>

          <Image
            src={gif}
            width={200}
            height={200}
            alt=""
            style={{ borderRadius: "150px" }}
          />
          <p className={styles.date}>{new Date(date).toDateString()}</p>

          <Link
            href="https://hispanicgroup.com"
            target="_blank"
            className={styles.description}
            style={{ color: "white" }}
          >
            hispanicgroup.com
          </Link>
        </div>
      </a>
    </>
  );
};

export default Card;
