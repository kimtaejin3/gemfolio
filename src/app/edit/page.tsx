"use client";

import { useMemo, useState } from "react";
import styles from "./EditStyled.module.css";
import { MdAddToPhotos } from "react-icons/md";
import { Editable, ReactEditor, Slate, withReact } from "slate-react";
import { Descendant, createEditor } from "slate";

export default function Edit() {
  const editor = useMemo(() => withReact(createEditor() as ReactEditor), []);
  const [name, setName] = useState<Descendant[]>([
    {
      type: "span",
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
                  editor={editor}
                  value={name}
                  onChange={(value) => setName(value)}
                >
                  <Editable
                    style={{
                      fontSize: "2.3rem",
                      fontWeight: "bold",
                    }}
                    placeholder="이름"
                  />
                </Slate>
              </div>
              <div>직책</div>
              <div>자기소개</div>
            </div>
            <div className={styles.profileCover}>
              <MdAddToPhotos color="#285455" size={100} />
            </div>
          </div>
        </div>
        <div className={styles.portfolioContents}>contents</div>
      </div>
    </div>
  );
}
