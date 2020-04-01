import React from "react";

import { Container } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input } from "@rocketseat/unform";
import { updateProfileRequest } from "~/store/modules/user/actions";
import { signOut } from "~/store/modules/auth/actions";
// import logo from "~/assets/logo.png";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("E-mail invalido")
    .required("E-mail obrigatorio"),
  username: Yup.string().required("Nome Completo obrigatório"),
  password_old: Yup.string().required("Campo Obrigatório"),
  password: Yup.string().required("Campo Obrigatório"),
  confirmPassword: Yup.string().required("Campo Obrigatório")
});

export default function Profile() {
  // const loading = useSelector(state => state.auth.loading);
  let profile = useSelector(state => state.user.profile);
  console.tron.log(profile);
  profile.password = "";
  const dispatch = useDispatch();

  function handleSubmit(data) {
    console.tron.log(data);
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <img
        src="https://api.adorable.io/avatars/50/abott@adorable.png"
        alt="profile"
      ></img>

      <Form initialData={profile} schema={schema} onSubmit={handleSubmit}>
        <Input name="username" placeholder="Nome Completo"></Input>
        <Input name="email" type="email" placeholder="Seu e-mail"></Input>
        <hr />
        <Input
          name="password_old"
          type="password"
          placeholder="senha Atual"
        ></Input>
        <Input name="password" type="password" placeholder="Nova Senha"></Input>
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme a senha"
        ></Input>

        <button type="submit">Atualizar Perfil</button>
      </Form>
    </Container>
  );
}
