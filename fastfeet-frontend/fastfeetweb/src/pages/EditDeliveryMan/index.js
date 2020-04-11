import React, { useState } from "react";

import { Container, Header, DIVFORM, IMPUT } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Label, Select } from "@rocketseat/unform";

import * as Yup from "yup";

import { updateDeliveryManRequest } from "~/store/modules/deliveryMan/actions";
import AvatarInput from "./../../components/AvatarInput";

import Button from "~/components/Button";

const schema = Yup.object().shape({
  name: Yup.string().required("Nome Obrigatorio"),
  email: Yup.string()
    .email("Favor informar um email valido")
    .required("Email obrigatorio"),
  avatarId: Yup.number().required("Favor inserir uma foto"),
  id: Yup.number().required(),
});

export default function EditDeliveryMan() {
  const dispatch = useDispatch();

  let deliveryMan = useSelector((state) => state.deliveryMan.deliveryMan);

  function handleSubmit(data) {
    console.tron.log(data);
    dispatch(updateDeliveryManRequest(data));
  }

  return (
    <Container>
      <Form initialData={deliveryMan} schema={schema} onSubmit={handleSubmit}>
        <Header>
          <span>Edição de entregadores</span>
          <Button action={"back"} pageBack={"/deliveryman"}></Button>
          <Button action={"salvar"} pageBack={"/deliveryman"}></Button>
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
          </IMPUT>
          <IMPUT>
            <Input name="email" placeholder=""></Input>
            <Input name="id" type="hidden"></Input>
          </IMPUT>
        </DIVFORM>
      </Form>
    </Container>
  );
}
