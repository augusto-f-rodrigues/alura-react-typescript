import React, { useState } from "react";
import { ITask } from "../../interfaces/task";
import { Button } from "../Button";
import styles from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";

export function Form({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}) {
  const [time, setTime] = useState("00:00");
  const [name, setName] = useState("");

  function addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      { name, time, id: uuidv4(), selected: false, concluded: false },
    ]);

    setTime("00:00");
    setName("");
  }

  return (
    <form className={styles.novaTarefa} onSubmit={addTask}>
      <div className={styles.inputContainer}>
        <label htmlFor="task">Task</label>
        <input
          id="tarefa"
          type="text"
          placeholder="What you wanna study?"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={time}
          onChange={(e) => setTime(e.target.value)}
          min={"00:00:00"}
          max={"24:00:00"}
          required
        />
      </div>

      <Button type="submit">Add</Button>
    </form>
  );
}
