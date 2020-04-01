import React, { useState } from "react";
import Calendar from "react-calendar";

import { Container } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Textarea, Select } from "@rocketseat/unform";

import * as Yup from "yup";

import { saveMeetRequest } from "~/store/modules/meet/actions";

const schema = Yup.object().shape({
  nome: Yup.string().required("Titulo Obrigatorio"),
  local: Yup.string().required("Favor digite informe o local"),
  descricao: Yup.string().required("Descrição Obrigatória"),
  dataMeet: Yup.date().required("Favor informe a data do evento")
});

export default function Profile() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    console.tron.log(data);
    dispatch(saveMeetRequest(data));
  }
  function onChange(data) {
    console.tron.log(data);
    // setDataMeet(date);
  }
  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="nome" placeholder="Titulo"></Input>

        {/* <hr /> */}
        <Input name="local" placeholder="Local"></Input>

        <Input type="date" name="dataMeet" placeholder="dd/mm/aaaa"></Input>

        <Textarea
          name="descricao"
          placeholder="Descrição"
          rowsMax="4"
        ></Textarea>

        <button type="submit">Adicionar Evento</button>
      </Form>
    </Container>
  );
}
