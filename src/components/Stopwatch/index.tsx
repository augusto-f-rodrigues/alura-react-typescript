import { Button } from "../Button";
import { Watch } from "./Watch";
import styles from "./Stopwatch.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../interfaces/task";
import { useEffect, useState } from "react";

interface StopwatchProps {
  selected: ITask | undefined;
  finishTask: () => void;
}

export function Stopwatch({ selected, finishTask }: StopwatchProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regressive(counter - 1);
      }
      return finishTask();
    }, 1000);
  }

  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Choose one card and start the stopwatch</p>
      <div className={styles.relogioWrapper}>
        <Watch time={time} />
      </div>
      <Button onClick={() => regressive(time)}>Start</Button>
    </div>
  );
}
