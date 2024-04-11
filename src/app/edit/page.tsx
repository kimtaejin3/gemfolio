"use client";
import { useEffect, useMemo, useState } from "react";
import styles from "./EditStyled.module.css";
import { MdAddToPhotos } from "react-icons/md";
import { Editable, ReactEditor, Slate, withReact } from "slate-react";
import { Descendant, Transforms, createEditor } from "slate";
import Skill from "@/components/InsertArea/Skill";
import WorkExp from "@/components/InsertArea/WorkExp";
import { Education } from "@/components/InsertArea/Education/Education";
import Project from "@/components/InsertArea/Project";
import { gql, useQuery } from "@apollo/client";

interface ProfileType {
  name: string;
  roll: string;
  intro: string;
}

const GET_PROFILE = gql`
  query {
    profileCollection(
      filter: { userId: { eq: "de9cbd0f-5c0e-4e9f-bc24-f3ae1d7f5030" } }
    ) {
      edges {
        node {
          name
          roll
          intro
        }
      }
    }
  }
`;

export default function Edit() {
  const { data, loading, error } = useQuery(GET_PROFILE);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [intro, setIntro] = useState("");

  useEffect(() => {
    if (
      data &&
      data.profileCollection &&
      data.profileCollection.edges.length > 0
    ) {
      const profileName = data.profileCollection.edges[0].node.name || "";
      const profileRole = data.profileCollection.edges[0].node.roll || "";
      const profileIntro = data.profileCollection.edges[0].node.intro || "";

      setName(profileName);
      setRole(profileRole);
      setIntro(profileIntro);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Check if data exists and if edges are empty
  if (
    !data ||
    !data.profileCollection ||
    data.profileCollection.edges.length === 0
  ) {
    return <p>No profile data available.</p>;
  }

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
                <input
                  type="text"
                  className={styles.name}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div style={{ margin: "2rem 0" }}>
                <input
                  type="role"
                  className={styles.role}
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="intro"
                  className={styles.intro}
                  value={intro}
                  onChange={(e) => setIntro(e.target.value)}
                />
              </div>
              <div>here</div>
            </div>
            <div className={styles.profileCover}>
              <MdAddToPhotos color="#285455" size={100} />
            </div>
          </div>
        </div>
        <div className={styles.portfolioContents}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <div className={`${styles.field} ${styles.skills}`}>
              <Skill />
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Work Experience</h2>

            <div className={styles.field}>
              <WorkExp />
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Education</h2>

            <div className={styles.field}>
              <Education />
            </div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Projects</h2>

            <div className={`${styles.field} ${styles.projects}`}>
              <Project />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
