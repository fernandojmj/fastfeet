import React, { useState, useEffect } from "react";

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
import history from "~/services/history";

import * as Yup from "yup";

import {
  getRecipientsOptions,
  selectRecipients,
} from "~/store/modules/recipient/actions";
import Button from "~/components/Button";
import { set } from "date-fns/esm";
import { getDeliveryManOptions } from "~/store/modules/deliveryMan/actions";
import { updateDeliveryRequest } from "~/store/modules/delivery/actions";

const schema = Yup.object().shape({
  recipient_id: Yup.string().required("Destinatario Obrigatorio"),
  deliveryman_id: Yup.string().required("Entregardor Obrigatorio"),
  product: Yup.string(),
  id: Yup.number(),
});

export default function CadRecipients() {
  const dispatch = useDispatch();
  let recipientOptions = useSelector(
    (state) => state.recipient.recipientOptions
  );
  let deliveryManOptions = useSelector(
    (state) => state.deliveryMan.deliveryManOptions
  );

  let delivery = useSelector((state) => state.delivery.delivery);

  const [recipientSelect, setRecipientSelect] = React.useState();
  const [deliveryManSelect, setdeliveryManSelect] = React.useState();
  const [recipientLoad, setRecipientLoad] = React.useState(false);
  const [deliveryManLoad, setdeliveryManLoad] = React.useState(false);

  function loadSelects() {
    recipientOptions.map((op) => {
      if (op.value === delivery.recipient.id) {
        setRecipientLoad(op);
      }
    });

    deliveryManOptions.map((op) => {
      if (op.value === delivery.deliveryman.id) {
        setdeliveryManLoad(op);
      }
    });
  }

  function handleSubmit(data) {
    console.tron.log("Salvando...");
    console.tron.log(data);
    dispatch(updateDeliveryRequest(data));
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
    setRecipientLoad(selectedOption);
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
    setdeliveryManLoad(selectedOption);
  };

  useEffect(() => {
    async function getRecipients() {
      dispatch(getRecipientsOptions());
    }
    async function getDeliveryMan() {
      dispatch(getDeliveryManOptions());
    }

    async function selectObjects() {
      setRecipientSelect(delivery.recipient.id);
      setdeliveryManSelect(delivery.deliveryman.id);
    }
    getRecipients();
    getDeliveryMan();
    selectObjects();
    loadSelects();
  }, []);

  return (
    <Container>
      <Form schema={schema} initialData={delivery} onSubmit={handleSubmit}>
        <Header>
          <span>Cadastro de encomendas</span>
          <Button action={"back"} pageBack={"/dashboard"}></Button>
          <Button action={"salvar"} pageBack={"/dashboard"}></Button>
        </Header>
        <DIVFORM>
          <DIVSELECTS>
            <LABELDESTINATARIO>
              <label>Destinátario</label>
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
                value={recipientLoad}
              />
            </LABELDESTINATARIO>
            <LABELENTREGADOR>
              <Input type="hidden" name="id" placeholder=""></Input>
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
                value={deliveryManLoad}
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
