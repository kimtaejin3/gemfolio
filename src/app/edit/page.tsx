"use client";

import { useMemo, useState } from "react";
import styles from "./EditStyled.module.css";
import { MdAddToPhotos } from "react-icons/md";
import { Editable, ReactEditor, Slate, withReact } from "slate-react";
import { Descendant, createEditor } from "slate";
import Skill from "@/components/InsertArea/Skill";
import WorkExp from "@/components/InsertArea/WorkExp";
import { Education } from "@/components/InsertArea/Education/Education";
import Project from "@/components/InsertArea/Project";
import { AddBtn } from "@/components/Commons/AddBtn/AddBtn";

export default function Edit() {
  const nameEditor = useMemo(
    () => withReact(createEditor() as ReactEditor),
    []
  );
  const roleEditor = useMemo(
    () => withReact(createEditor() as ReactEditor),
    []
  );
  const introEditor = useMemo(
    () => withReact(createEditor() as ReactEditor),
    []
  );
  const [name, setName] = useState<Descendant[]>([
    {
      children: [{ text: "" }],
    },
  ]);
  const [role, setRole] = useState<Descendant[]>([
    {
      children: [{ text: "" }],
    },
  ]);
  const [intro, setIntro] = useState<Descendant[]>([
    {
      children: [{ text: "" }],
    },
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div>Profile</div>
        <div>Edit</div>
      </div>
      <div className={styles.portfolio}>
        <div className={styles.portfolioHeader}>
          <div className={styles.profile}>
            <div className={styles.insertArea}>
              <div>
                <Slate
                  editor={nameEditor}
                  value={name}
                  onChange={(value) => setName(value)}
                >
                  <Editable
                    style={{
                      fontSize: "3rem",
                      fontWeight: "bold",
                    }}
                    placeholder="이름"
                  />
                </Slate>
              </div>
              <div style={{ margin: "2rem 0" }}>
                <Slate
                  editor={roleEditor}
                  value={role}
                  onChange={(value) => setRole(value)}
                >
                  <Editable
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                    }}
                    placeholder="직책"
                  />
                </Slate>
              </div>
              <div>
                <Slate
                  editor={introEditor}
                  value={intro}
                  onChange={(value) => setIntro(value)}
                >
                  <Editable
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: "bold",
                    }}
                    placeholder="간단 자기소개"
                  />
                </Slate>
              </div>
            </div>
            <div className={styles.profileCover}>
              <MdAddToPhotos color="#285455" size={100} />
            </div>
          </div>
        </div>
        <div className={styles.portfolioContents}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <AddBtn />
            <div className={`${styles.field} ${styles.skills}`}>
              <Skill />
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Work Experience</h2>
            <AddBtn />

            <div className={styles.field}>
              <WorkExp />
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Education</h2>
            <AddBtn />

            <div className={styles.field}>
              <Education />
            </div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <AddBtn />

            <div className={`${styles.field} ${styles.projects}`}>
              <Project />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
