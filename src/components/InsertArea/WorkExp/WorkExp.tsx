import styles from "./WorkExpStyled.module.css";
import { Editable, ReactEditor, Slate, withReact } from "slate-react";
import { Descendant, createEditor } from "slate";
import { useMemo, useState } from "react";
import { MdAddToPhotos } from "react-icons/md";

export function WorkExp() {
  const nameEditor = useMemo(
    () => withReact(createEditor() as ReactEditor),
    []
  );
  const [name, setName] = useState<Descendant[]>([
    {
      children: [{ text: "" }],
    },
  ]);

  const roleEditor = useMemo(
    () => withReact(createEditor() as ReactEditor),
    []
  );
  const [role, setRole] = useState<Descendant[]>([
    {
      children: [{ text: "" }],
    },
  ]);

  const periodEditor = useMemo(
    () => withReact(createEditor() as ReactEditor),
    []
  );
  const [period, setPeriod] = useState<Descendant[]>([
    {
      children: [{ text: "" }],
    },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <MdAddToPhotos />
      </div>
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
            placeholder="이름"
          />
        </Slate>

        <Slate
          editor={roleEditor}
          value={role}
          onChange={(value) => setRole(value)}
        >
          <Editable
            style={{
              fontSize: "1.5rem",
              marginTop: "1rem",
            }}
            placeholder="직책"
          />
        </Slate>

        <Slate
          editor={periodEditor}
          value={period}
          onChange={(value) => setPeriod(value)}
        >
          <Editable
            style={{
              fontSize: "1.3rem",
              marginTop: "1rem",
            }}
            placeholder="기간"
          />
        </Slate>
      </div>
    </div>
  );
}
