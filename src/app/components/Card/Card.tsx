import Image from "next/image";
import gif from "../../../../public/congratsPeople.gif";
import styles from "./card.module.css";
import Link from "next/link";

interface ICardProps {
  name: string;
  task: string;
  date: string;
  totalTasks: number;
  taskNumber: number;
}

const Card = async ({ task, date, totalTasks, taskNumber }: ICardProps) => {
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
          <p className={styles.taskNumber}>Tarea {taskNumber}</p>
          <p className={styles.taskName}>{task}</p>

          <div className={styles.footer}>
            <p>Llevas {totalTasks} tareas realizadas.</p>
            <p className={styles.date}>{new Date(date).toDateString()}</p>
          </div>
        </div>

        <div className={styles.back}>
          <Image
            src="/back2.png"
            className={styles.backBackgroundImage}
            alt=""
            fill={true}
          />

          <Image
            src={gif}
            width={200}
            height={200}
            alt=""
            style={{ borderRadius: "150px" }}
          />
          <p className={styles.footerPhrase}>
            ¡Continúa desafiándote día a día!.
          </p>
        </div>
      </a>
    </>
  );
};

export default Card;
