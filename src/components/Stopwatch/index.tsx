import { Button } from "../Button";
import { Watch } from "./Watch";
import styles from "./Stopwatch.module.scss"

export function Stopwatch() {
  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Choose one card and start the stopwatch</p>
      <div className={styles.relogioWrapper}>
        <Watch />
      </div>
      <Button>Start</Button>
    </div>
  );
}
