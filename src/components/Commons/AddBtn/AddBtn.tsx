import { ReactNode } from "react";
import styles from "./AddBtnStyled.module.css";

interface AddBtnProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function AddBtn({ onClick }: AddBtnProps) {
  return (
    <button onClick={onClick} className={styles.btn}>
      + Add a new
    </button>
  );
}
