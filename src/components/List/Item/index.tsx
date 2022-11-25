import { ITask } from "../../../interfaces/task";
import styles from "./Item.module.scss";

interface ItemProps extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

export function Item({
  name,
  time,
  selected,
  concluded,
  id,
  selectTask,
}: ItemProps) {
  return (
    <li
      onClick={() =>
        !concluded &&
        selectTask({
          name,
          time,
          selected,
          concluded,
          id,
        })
      }
      className={`${styles.item} ${selected ? styles.itemSelecionado : ""} ${
        concluded ? styles.itemCompletado : ""
      }`}
    >
      <h3>{name}</h3>
      <span>{time}</span>
      {concluded && (
        <span
          className={styles.concluido}
          aria-label="tarefa completada"
        ></span>
      )}
    </li>
  );
}
