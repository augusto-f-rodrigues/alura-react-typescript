import { ITask } from "../../interfaces/task";
import { Item } from "./Item";
import styles from "./List.module.scss";

interface ListProps {
  tasks: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

export function List({ tasks, selectTask }: ListProps) {
  return (
    <aside className={styles.listaTarefas}>
      <h2> What study today: </h2>
      <ul>
        {tasks.map((el) => (
          <Item selectTask={selectTask} key={el.id} {...el} />
        ))}
      </ul>
    </aside>
  );
}
