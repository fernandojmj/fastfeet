import React, { useState } from "react";
import Calendar from "react-calendar";

import {
  Container,
  Header,
  BUTTONS,
  DIVFORM,
  INPUTNAME,
  LABELRUA,
  LABELNUMERO,
  LABELCOMPLEMENTO,
  LABELSENDERECO,
  DIVTRES,
  LABELCIDADE,
  LABELESTADO,
  LABELCEP,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Label, Select } from "@rocketseat/unform";
import history from "~/services/history";

import * as Yup from "yup";

import { saveRecipientsRequest } from "~/store/modules/recipient/actions";
import Button from "~/components/Button";

const schema = Yup.object().shape({
  name: Yup.string().required("Nome Obrigatorio"),
  rua: Yup.string().required("Favor informar um email valido"),
  numero: Yup.string(),
  complemento: Yup.string(),
  cidade: Yup.string().required("Cidade Obrigatorio"),
  estado: Yup.string().required("Estado Obrigatorio"),
  cep: Yup.string().required("CEP Obrigatorio"),
});

export default function CadRecipients() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    console.tron.log(data);
    dispatch(saveRecipientsRequest(data));
  }

  async function changePage(page) {
    history.push(page);
  }
  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Header>
          <span>Cadastro de destinatário</span>
          <Button action={"back"} pageBack={"/recipients"}></Button>
          <Button action={"salvar"} pageBack={"/recipients"}></Button>
        </Header>
        <DIVFORM>
          <INPUTNAME>
            <label>Nome</label>
            <Input name="name" placeholder=""></Input>
          </INPUTNAME>
          <LABELSENDERECO>
            <LABELRUA>
              <label name="labelRua">Rua</label>
            </LABELRUA>
            <LABELNUMERO>
              <label>Número</label>
            </LABELNUMERO>
            <LABELCOMPLEMENTO>
              <label>Complemento</label>
            </LABELCOMPLEMENTO>
          </LABELSENDERECO>
          <LABELSENDERECO>
            <LABELRUA>
              <Input name="rua" placeholder=""></Input>
            </LABELRUA>
            <LABELNUMERO>
              <Input name="numero" placeholder=""></Input>
            </LABELNUMERO>
            <LABELCOMPLEMENTO>
              <Input name="complemento" placeholder=""></Input>
            </LABELCOMPLEMENTO>
          </LABELSENDERECO>

          <DIVTRES>
            <LABELCIDADE>
              <label name="labelRua">Cidade</label>
            </LABELCIDADE>
            <LABELESTADO>
              <label>Estado</label>
            </LABELESTADO>
            <LABELCEP>
              <label>Cep</label>
            </LABELCEP>
          </DIVTRES>
          <DIVTRES>
            <LABELCIDADE>
              <Input name="cidade" placeholder=""></Input>
            </LABELCIDADE>
            <LABELESTADO>
              <Input name="estado" placeholder=""></Input>
            </LABELESTADO>
            <LABELCEP>
              <Input name="cep" placeholder=""></Input>
            </LABELCEP>
          </DIVTRES>
        </DIVFORM>
      </Form>
    </Container>
  );
}
