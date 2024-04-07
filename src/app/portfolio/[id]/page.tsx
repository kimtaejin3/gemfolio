import { createClient } from "@/utils/supabase/server";
import styles from "./PortfolioStyle.module.css";

export default function Portfolio() {
  const signOut = async () => {
    "use server";
    const supabase = createClient();

    await supabase.auth.signOut();
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <h1>
            <span className={styles.highlight}>다양한 경험치와 공감 능력</span>
            을 지닌 UX/UI 디자이너{" "}
            <span className={styles.highlight}>이가은</span>
          </h1>
          <form action={signOut}>
            <button>로그아웃</button>
          </form>
          <div className={styles.profileCover}>
            {/* <MdAddToPhotos color="#285455" size={100} /> */}
          </div>
        </div>
        <div className={styles.contents}>
          <div className={styles.gridField}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>ABOUT ME</h2>
              <ul className={styles.list}>
                <li className={styles.item}>배달의 민족</li>
                <li className={styles.item}>네이버</li>
                <li className={styles.item}>오늘의 집</li>
                <li className={styles.item}>11번가</li>
              </ul>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>EXPERIENCE</h2>
              <ul className={styles.list}>
                <li className={styles.item}>배달의 민족</li>
                <li className={styles.item}>네이버</li>
                <li className={styles.item}>오늘의 집</li>
                <li className={styles.item}>11번가</li>
              </ul>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>PROJECTS</h2>
              <ul className={styles.list}>
                <li className={styles.item}>배달의 민족</li>
                <li className={styles.item}>네이버</li>
                <li className={styles.item}>오늘의 집</li>
                <li className={styles.item}>11번가</li>
              </ul>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>SKILL</h2>
              <ul className={styles.list}>
                <li className={styles.item}>배달의 민족</li>
                <li className={styles.item}>네이버</li>
                <li className={styles.item}>오늘의 집</li>
                <li className={styles.item}>11번가</li>
              </ul>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>EDUCATION</h2>
              <ul className={styles.list}>
                <li className={styles.item}>배달의 민족</li>
                <li className={styles.item}>네이버</li>
                <li className={styles.item}>오늘의 집</li>
                <li className={styles.item}>11번가</li>
              </ul>
            </section>
          </div>
          <div className={styles.contact}>
            <h2>Contact</h2>
            <form>
              <div>
                <input type="text" />
              </div>
              <div>
                <textarea></textarea>
              </div>
              <div>
                <input type="text" />
              </div>
              <button type="submit">연락하기</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
