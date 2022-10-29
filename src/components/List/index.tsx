import { Item } from "./Item";
import styles from "./List.module.scss";

export function List() {
  const tasks = [
    { name: "React", time: "02:00:00" },
    { name: "Typescript", time: "01:00:00" },
  ];
  return (
    <aside className={styles.listaTarefas}>
      <h2> What study today: </h2>
      <ul>
        {tasks.map((el, i) => (
          <Item key={i} {...el} />
        ))}
      </ul>
    </aside>
  );
}
