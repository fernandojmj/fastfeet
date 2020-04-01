import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import { signInRequest } from "~/store/modules/auth/actions";

// import { Container } from './styles';
import logo from "~/assets/fastfeet-logo.png";
import { ErrorMessage } from "formik";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("E-mail invalido")
    .required("E-mail obrigatorio"),
  password: Yup.string().required("Senha obrigatória")
});

export default function SignIn() {
  const dispacth = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit(data) {
    const { email, password } = data;
    dispacth(signInRequest(email, password));
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <img src={logo} alt="FastFeet" />
        <span>SEU E-MAIL</span>
        <Input name="email" type="email"></Input>

        <span>SUA SENHA</span>
        <Input name="password" type="password"></Input>
        <button type="submit">
          {loading ? "carregando..." : "Entrar no sistema"}
        </button>
      </Form>
    </>
  );
}
