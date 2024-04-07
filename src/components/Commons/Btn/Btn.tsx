import { ReactNode } from "react";
import styles from "./BtnStyled.module.css";

interface BtnProps {
  children: ReactNode;
  bgColor: string;
}

export function Btn({ children, bgColor }: BtnProps) {
  return (
    <button className={`${styles.btn} ${styles[bgColor]}`}>{children}</button>
  );
}
