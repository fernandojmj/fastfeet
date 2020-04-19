import React, { useState } from "react";
import Calendar from "react-calendar";

import { Container, Header, BUTTONS, DIVFORM, IMPUT } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Label, Select } from "@rocketseat/unform";
import history from "~/services/history";

import * as Yup from "yup";

import { saveDeliveryManRequest } from "~/store/modules/deliveryMan/actions";
import AvatarInput from "./../../components/AvatarInput";
import Button from "~/components/Button";

const schema = Yup.object().shape({
  name: Yup.string().required("Nome Obrigatorio"),
  email: Yup.string().email().required("Favor informar um email valido"),
  avatarId: Yup.number(),
});

export default function CadDeliveryMan() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    console.tron.log(data);
    dispatch(saveDeliveryManRequest(data));
  }
  function onChange(data) {
    console.tron.log(data);
    // setDataMeet(date);
  }

  async function changePage(page) {
    history.push(page);
  }
  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Header>
          <span>Cadastro de entregadores</span>
          <Button action={"back"} pageBack={"/deliveryman"}></Button>
          <Button action={"salvar"}></Button>
        </Header>
        <DIVFORM>
          <AvatarInput name="avatarId" />
          <IMPUT>
            <label>Nome</label>
          </IMPUT>
          <IMPUT>
            <Input name="name" placeholder=""></Input>
          </IMPUT>
          <IMPUT>
            <label>Email</label>
            <IMPUT></IMPUT>
            <Input name="email" placeholder=""></Input>
          </IMPUT>
        </DIVFORM>
      </Form>
    </Container>
  );
}
