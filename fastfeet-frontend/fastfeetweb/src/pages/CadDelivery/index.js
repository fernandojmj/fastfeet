import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import AsyncSelect from "react-select/async";

import {
  Container,
  Header,
  DIVFORM,
  INPUTNAME,
  LABELDESTINATARIO,
  LABELENTREGADOR,
  DIVSELECTS,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Label, Select } from "@rocketseat/unform";

import * as Yup from "yup";

import {
  getRecipientsOptions,
  selectRecipients,
} from "~/store/modules/recipient/actions";
import Button from "~/components/Button";
import { set } from "date-fns/esm";
import { getDeliveryManOptions } from "~/store/modules/deliveryMan/actions";
import { saveDeliveryRequest } from "~/store/modules/delivery/actions";

const schema = Yup.object().shape({
  recipient_id: Yup.string().required("Destinatario Obrigatorio"),
  deliveryman_id: Yup.string().required("Entregardor Obrigatorio"),
  product: Yup.string(),
});

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(1),
  },
}));

export default function CadRecipients() {
  const classes = useStyles();
  const dispatch = useDispatch();
  let recipientOptions = useSelector(
    (state) => state.recipient.recipientOptions
  );
  let deliveryManOptions = useSelector(
    (state) => state.deliveryMan.deliveryManOptions
  );

  const [recipientSelect, setRecipientSelect] = React.useState(false);
  const [deliveryManSelect, setdeliveryManSelect] = React.useState(false);

  function handleSubmit(data) {
    console.tron.log("Salvando...");
    console.tron.log(data);
    dispatch(saveDeliveryRequest(data));
  }

  const filterRecipient = (inputValue: string) => {
    console.tron.log(inputValue);
    if (recipientOptions !== undefined) {
      return recipientOptions.filter((i) =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
  };

  const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterRecipient(inputValue));
      }, 1000);
    });

  const handleChange = (selectedOption) => {
    setRecipientSelect(selectedOption.value);
  };

  const filterDeliveryMan = (inputValue: string) => {
    if (deliveryManOptions !== undefined) {
      return deliveryManOptions.filter((i) =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
  };

  const promiseOptionsDeliveryMan = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterDeliveryMan(inputValue));
      }, 1000);
    });

  const handleChangeDeliveryMan = (selectedOption) => {
    setdeliveryManSelect(selectedOption.value);
  };

  useEffect(() => {
    async function getRecipients() {
      dispatch(getRecipientsOptions());
    }
    async function getDeliveryMan() {
      dispatch(getDeliveryManOptions());
    }
    getRecipients();
    getDeliveryMan();
  }, []);

  return (
    <Container>
      <Form
        // schema={schema}
        onSubmit={handleSubmit}
      >
        <Header>
          <span>Cadastro de encomendas</span>
          <Button action={"back"} pageBack={"/dashboard"}></Button>
          <Button action={"salvar"} pageBack={"/dashboard"}></Button>
        </Header>
        <DIVFORM>
          <DIVSELECTS>
            <LABELDESTINATARIO>
              <label name="labelRua">Destinátario</label>
            </LABELDESTINATARIO>
            <LABELENTREGADOR>
              <label>Entregador</label>
            </LABELENTREGADOR>
          </DIVSELECTS>
          <DIVSELECTS>
            <LABELDESTINATARIO>
              <Input
                type="hidden"
                name="recipient_id"
                value={recipientSelect}
                placeholder=""
              ></Input>
              <AsyncSelect
                cacheOptions
                defaultOptions
                loadOptions={promiseOptions}
                onChange={handleChange}
                className={classes.formControl}
              />
            </LABELDESTINATARIO>
            <LABELENTREGADOR>
              <Input
                type="hidden"
                name="deliveryman_id"
                placeholder=""
                value={deliveryManSelect}
              ></Input>
              <AsyncSelect
                cacheOptions
                defaultOptions
                loadOptions={promiseOptionsDeliveryMan}
                onChange={handleChangeDeliveryMan}
                className={classes.formControl}
              />
            </LABELENTREGADOR>
          </DIVSELECTS>
          <INPUTNAME>
            <label>Nome do produto</label>
            <Input name="product" placeholder=""></Input>
          </INPUTNAME>
        </DIVFORM>
      </Form>
    </Container>
  );
}
