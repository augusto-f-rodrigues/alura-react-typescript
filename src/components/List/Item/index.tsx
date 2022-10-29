import styles from "../List.module.scss"

export function Item({name, time}: {name: string, time: string}) {

  return (
    <li className={styles.item}>
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  );
}
