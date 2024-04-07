import Link from "next/link";
import styles from "./HeaderStyled.module.css";
import Btn from "../Commons/Btn/Btn";
import Image from "next/image";
import logo from "@/assets/logo.svg";
// import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

export function Header() {
  // const cookieStore = cookies();
  // const supabase = createClient(cookieStore);
  // const [user, setUser] = useState<User>();

  // async function getUser() {
  //   const {
  //     data: { user },
  //   } = await supabase.auth.getUser();
  //   console.log(user);
  //   if (user) {
  //     setUser(user);
  //   }
  // }

  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <h1>
            <Image width={100} src={logo} alt="logo" />
          </h1>
        </Link>
        <Link href="/signin">
          <Btn bgColor="primary">시작하기</Btn>
        </Link>
      </div>
    </header>
  );
}
