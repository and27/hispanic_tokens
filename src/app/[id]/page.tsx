import styles from "./page.module.css";
import Card from "../components/Card/Card";
import Social from "../components/Social/Social";
import { getInfo } from "@/lib/getDataEntries";
import { use } from "react";

export default function Home({ params }: any) {
  const { id } = params;

  const r = use(getInfo(id)) as any;
  if (!r) return <h1>Invalid url</h1>;
  const { name, task, date, totalTasks } = r.fields;

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container_inner}>
          <Social />
          <Card name={name} task={task} date={date} totalTasks={totalTasks} />
        </div>
      </main>
    </>
  );
}
