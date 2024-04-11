import Link from "next/link";
import styles from "./HeaderStyled.module.css";
import { Btn } from "../Commons/Btn/Btn";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { createClient } from "@/utils/supabase/server";

export async function Header() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <h1>
            <Image width={100} src={logo} alt="logo" />
          </h1>
        </Link>
        <Link href="/signin">
          {!user && <Btn bgColor="primary">시작하기</Btn>}
        </Link>
        {user && (
          <Link href="/edit">
            <Btn bgColor="primary">포트폴리오 만들기</Btn>
          </Link>
        )}
      </div>
    </header>
  );
}
