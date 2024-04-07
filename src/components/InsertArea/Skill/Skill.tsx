import { FaPlus } from "react-icons/fa6";
import styles from "./SkillStyled.module.css";
import { Editable, ReactEditor, Slate, withReact } from "slate-react";
import { Descendant, createEditor } from "slate";
import { useMemo, useState } from "react";

export function Skill() {
  const nameEditor = useMemo(
    () => withReact(createEditor() as ReactEditor),
    []
  );
  const [name, setName] = useState<Descendant[]>([
    {
      children: [{ text: "" }],
    },
  ]);

  const descriptionEditor = useMemo(
    () => withReact(createEditor() as ReactEditor),
    []
  );
  const [description, setDescription] = useState<Descendant[]>([
    {
      children: [{ text: "" }],
    },
  ]);

  return (
    <div className={styles.container}>
      <FaPlus color="#aaa" style={{ cursor: "pointer" }} />
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
          placeholder="스킬이름"
        />
      </Slate>
      <Slate
        editor={descriptionEditor}
        value={description}
        onChange={(value) => setDescription(value)}
      >
        <Editable
          style={{
            fontSize: "1.4rem",
            marginTop: "0.8rem",
          }}
          placeholder="스킬설명"
        />
      </Slate>
    </div>
  );
}
