import React, { useState, useRef, useEffect } from "react";
import { useField } from "@rocketseat/unform";
import api from "~/services/api";
import { Container } from "./styles";

import imageAvatar from "~/assets/avatar_vazio.png";

export default function AvatarInput() {
  const { defaultValue, registerField } = useField("avatarid");
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  async function handleChange(e) {
    const data = new FormData();
    console.tron.log("handleChange");

    data.append("file", e.target.files[0]);
    console.log("arquivo");
    console.log(data);
    //chama api
    const response = await api.post(`files`, data);

    let avatar_Id = response.data.id;
    // let url = URL.createObjectURL(e.target.files[0]);
    let Avatar_URL = response.data.url;
    setFile(avatar_Id);
    setPreview(Avatar_URL);
  }

  useEffect(() => {
    console.tron.log("useEffect");
    if (ref.current) {
      registerField({
        name: "avatarId",
        ref: ref.current,
        path: "dataset.file",
      });
    }
  }, [ref, registerField]);

  return (
    <Container>
      <label htmlFor="avatarId">
        <img src={preview || imageAvatar} alt=""></img>
        <input
          type="file"
          id="avatarId"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
