import bgImg from "@/assets/demo-bg.png";
import profileImg from "@/assets/demo-profile.png";
import Image from "next/image";
import styles from "./Demo.module.css";
import { FaBloggerB } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";
import Form from "@/components/Form";

export default function Demo() {
  return (
    <>
      <div className={styles.cover}>
        <Image fill={true} src={bgImg} alt="bgImg" />
      </div>

      <div className={styles.contents}>
        <h1 className={styles.title}>Taejin Kim’s Frontend Portfolio</h1>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <FaBloggerB />
            <a href="https://taejinkim-devlog.tistory.com/" target="_blank">
              My tech blog
            </a>
          </li>

          <li className={styles.listItem}>
            <FaTools />
            <Link href="#">Lists of Contact</Link>
          </li>
        </ul>
        <div className={styles.profileCover}>
          <Image fill={true} src={profileImg} alt="profileImg" />
        </div>

        <div className={styles.intro}>
          <h2 className={styles.introTitle}>Welcome to my online Portfolio!</h2>
          <p className={styles.introDescription}>
            I am a dedicated and passionate data analyst with a knack for
            uncovering hidden patterns and valuable insights. With my technical
            expertise, analytical mindset, and strong communication skills, I am
            poised to make a significant impact in the field of data analysis.
            Thank you for taking the time to learn more about me. I look forward
            to connecting and collaborating on exciting data-driven projects in
            the future!
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Socials</h2>
          <ul className={styles.socialList}>
            <li className={styles.socialListItem}>
              <FaGithub />
              <a href="#" target="_blank">
                GITHUB
              </a>
            </li>
            <li className={styles.socialListItem}>
              <FaLinkedin />
              <a href="#" target="_blank">
                LinkedIn
              </a>
            </li>
            <li className={styles.socialListItem}>
              <FaInstagramSquare />
              <a href="#" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <Form />
        </div>
      </div>
    </>
  );
}
