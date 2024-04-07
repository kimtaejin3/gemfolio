"use client";
import { createClient } from "@/utils/supabase/client";
import styles from "./SignStyled.module.css";
import { useState } from "react";

export default function Signin() {
  const supabase = createClient();

  async function signinWithKakao() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>시작하기</h1>
      <button onClick={signinWithKakao} className={styles.kakaoBtn}>
        카카오톡으로 시작하기
      </button>
    </div>
  );
}
