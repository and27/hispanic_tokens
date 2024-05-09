import styles from "./page.module.scss";
import Card from "../components/Card/Card";
import Social from "../components/Social/Social";
import { getInfo } from "@/lib/getDataEntries";
import { use } from "react";
import Image from "next/image";

export default function Home({ params }: any) {
  const { id } = params;

  const r = use(getInfo(id)) as any;
  if (!r) return <h1>Invalid url</h1>;
  const { name, task, date, totalTasks, taskNumber } = r.fields;

  return (
    <>
      <div className={styles.pyro}>
        <div className={styles.before}></div>
        <div className={styles.after}></div>
      </div>
      <main className={styles.main}>
        <div className={styles.container_inner}>
          <div>
            <Image
              src="/logoP.png"
              alt="Hispanic Network Community Logo"
              className={styles.logo}
              width={160}
              height={160}
              priority
            />
            <p className={styles.subheading}>¡Felicitaciones!</p>
            <h2 className={styles.subtitle}>Carolina Barale</h2>
          </div>
          <Social />
          <Card
            name={name}
            task={task}
            date={date}
            totalTasks={totalTasks}
            taskNumber={taskNumber}
          />
        </div>
      </main>
    </>
  );
}
