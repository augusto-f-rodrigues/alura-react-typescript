import { Button } from "../Button";
import styles from "./Form.module.scss";

export function Form() {
  return (
    <form className={styles.novaTarefa}>
      <div className={styles.inputContainer}>
        <label htmlFor="task">Task</label>
        <input
          id="tarefa"
          type="text"
          placeholder="What you wanna study?"
          required
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="time">Time</label>
        <input
          id="tempo"
          type="time"
          step={1}
          name="time"
          min={"00:00:00"}
          max={"00:00:00"}
          required
        />
      </div>

      <Button>
        Add
      </Button>
    </form>
  );
}
