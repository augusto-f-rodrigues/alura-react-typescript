import { useState } from "react";
import { Form } from "../components/Form";
import { List } from "../components/List";
import { Stopwatch } from "../components/Stopwatch";
import { ITask } from "../interfaces/task";

import styles from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task, selected: task.id === selectedTask.id ? true : false
    })))
  }

  function finishTask (){
    if(selected){
      setSelected(undefined)
      setTasks(oldTasks => oldTasks.map(task => {
        if(task.id === selected.id){
          return {
            ...task,
            selected: false,
            concluded: true
          }
        }
        return task
      }))
    }
  }

  return (
    <div className={styles.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Stopwatch finishTask={finishTask} selected={selected} />
    </div>
  );
}

export default App;
