import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}

export function Button({ children, type, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} type={type} className={styles.botao}>
      {children}
    </button>
  );
}
