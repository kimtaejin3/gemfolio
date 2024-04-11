"use client";
import { gql, useMutation } from "@apollo/client";
import styles from "./FormStyled.module.css";
import { FormEvent, useRef } from "react";
import { createClient } from "@/utils/supabase/client";

const ADD_CONTACT = gql`
  mutation ($name: String!, $phone: String!, $content: String!) {
    insertIntoprofileCollection(
      objects: [{ name: $name, phone: $phone, content: $content }]
    ) {
      affectedCount
      records {
        name
        phone
        content
      }
    }
  }
`;

export function Form() {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const contentRef = useRef(null);
  const [addContact, { loading, error }] = useMutation(ADD_CONTACT);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!nameRef.current || !phoneRef.current || !contentRef.current) {
      return;
    }
    const name = nameRef.current as HTMLInputElement;
    const phone = phoneRef.current as HTMLInputElement;
    const content = contentRef.current as HTMLTextAreaElement;

    addContact({
      variables: {
        name: name.value,
        phone: phone.value,
        content: content.value,
      },
    });

    name.value = "";
    phone.value = "";
    content.value = "";
  };

  return (
    <form className={styles.contact} onSubmit={handleSubmit}>
      <div>
        <input
          ref={nameRef}
          className={styles.name}
          type="text"
          placeholder="이름을 입력해주세요"
          required
        />
      </div>
      <div>
        <input
          ref={phoneRef}
          className={styles.phone}
          type="text"
          placeholder="연락처를 입력해주세요"
          required
        />
      </div>
      <div>
        <textarea
          ref={contentRef}
          className={styles.content}
          placeholder="연락 내용을 입력해주세요"
          required
        />
      </div>
      <button>Contact to Taejin</button>
    </form>
  );
}
