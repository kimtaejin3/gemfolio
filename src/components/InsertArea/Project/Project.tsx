import styles from "./ProjectStyled.module.css";
import { FaPlus } from "react-icons/fa6";
import { Editable, ReactEditor, Slate, withReact } from "slate-react";
import { Descendant, createEditor } from "slate";
import { useMemo, useState } from "react";

export function Project() {
  const nameEditor = useMemo(
    () => withReact(createEditor() as ReactEditor),
    []
  );
  const [name, setName] = useState<Descendant[]>([
    {
      children: [{ text: "" }],
    },
  ]);

  const desEditor = useMemo(() => withReact(createEditor() as ReactEditor), []);
  const [des, setDes] = useState<Descendant[]>([
    {
      children: [{ text: "" }],
    },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.cover}></div>
      <div className={styles.contents}>
        <Slate
          editor={nameEditor}
          value={name}
          onChange={(value) => setName(value)}
        >
          <Editable
            style={{
              fontSize: "1.7rem",
              fontWeight: "bold",
            }}
            placeholder="프로젝트 이름"
          />
        </Slate>
        <FaPlus color="#aaa" style={{ margin: "1rem 0", cursor: "pointer" }} />
        <Slate
          editor={desEditor}
          value={des}
          onChange={(value) => setDes(value)}
        >
          <Editable
            style={{
              fontSize: "1.4rem",
            }}
            placeholder="프로젝트 설명"
          />
        </Slate>
      </div>
    </div>
  );
}
