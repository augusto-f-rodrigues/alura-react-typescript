import { PropsWithChildren } from "react";
import styles from "./Button.module.scss";

export function Button(props: PropsWithChildren) {
  return <button className={styles.botao}>{props.children}</button>;
}
