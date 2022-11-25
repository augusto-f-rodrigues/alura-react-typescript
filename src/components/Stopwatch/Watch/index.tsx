import styles from "./Watch.module.scss";

interface WatchProps {
  time: number | undefined;
}

export function Watch({ time = 0 }: WatchProps) {

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minutesDozens, minutesUnit] = String(minutes).padStart(2, '0')
  const [secondsDozens, secondsUnit] = String(seconds).padStart(2, '0')



  return (
    <>
      <span className={styles.relogioNumero}>{minutesDozens}</span>
      <span className={styles.relogioNumero}>{minutesUnit}</span>
      <span className={styles.relogioDivisao}>:</span>
      <span className={styles.relogioNumero}>{secondsDozens}</span>
      <span className={styles.relogioNumero}>{secondsUnit}</span>
    </>
  );
}
