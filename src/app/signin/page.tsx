import styles from "./SignStyled.module.css";

export default function Signin() {
  //   const supabase = createClient();

  //   async function signinWithKakao() {
  //     const { error } = await supabase.auth.signInWithOAuth({
  //       provider: "kakao",
  //     });
  //     if (error) {
  //       console.error(error);
  //     }
  //   }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>시작하기</h1>
      <button className={styles.kakaoBtn}>카카오톡으로 시작하기</button>
    </div>
  );
}
