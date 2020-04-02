import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { takeLatest, all, call, put } from "redux-saga/effects";
import { Link } from "react-router-dom";
import ReactToolTip from "react-tooltip";
import {
  getDeliveryRequest,
  getDeliveryByEncomendaRequest,
  selectProdutos
} from "~/store/modules/delivery/actions";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import api from "~/services/api";
import "./styles.css";

import caneta from "~/assets/caneta_edit.png";
import lixeira from "~/assets/lixeira_excluir.png";
import visualizar from "~/assets/visualizar.png";
import SimpleDialog from "~/components/SimpleDialog";
import {
  Container,
  Header,
  HEADERTABLE,
  ENCOMENDAS,
  INPUTS,
  InputSearch,
  IdEncomenda,
  Destinatario,
  Entregador,
  Cidade,
  Estado,
  Status,
  Acao,
  AcaoList,
  Acoes
} from "~/pages/Dashboard/styles";
import { de } from "date-fns/locale";
// import { Container } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  let deliverys = useSelector(state => state.delivery.deliverys);
  let linhas = useSelector(state => state.delivery.produtos);

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(deliverys[1]);

  function handleClickOpen(delivery) {
    setOpen(true);
    console.tron.log("Valor selecionado");
    setSelectedValue(delivery);
  }

  const handleClose = value => {
    setOpen(false);
  };

  async function handleItem(idDelivery) {
    dispatch(selectProdutos(linhas, idDelivery));
  }

  useEffect(() => {
    let response;
    async function getMeetUps() {
      response = dispatch(getDeliveryRequest());
    }
    getMeetUps();
  }, []);

  async function seachByEncomenda(event) {
    dispatch(await getDeliveryByEncomendaRequest(`${event.target.value}`));
  }

  function formatarDate(data) {
    const dateFormated = format(new Date(data), "d 'de' MMMM", { locale: pt });
    return dateFormated;
  }

  return (
    <Container>
      <Header>
        <span>Gerenciando encomendas</span>
      </Header>
      <INPUTS>
        <InputSearch
          name="search"
          placeholder="Buscar por Encomendas"
          onChange={e => seachByEncomenda(e)}
        ></InputSearch>
        <a href="/newMeet">
          <button> CADASTRAR</button>
        </a>
      </INPUTS>
      <HEADERTABLE>
        <IdEncomenda>ID</IdEncomenda>
        <Destinatario>
          <span>Destinatario</span>
        </Destinatario>
        <Entregador>Entregador</Entregador>
        <Cidade>Cidade</Cidade>
        <Estado>Estato</Estado>
        <Status>Status</Status>
        <Acao>Ações</Acao>
      </HEADERTABLE>
      {selectedValue === undefined ? null : (
        <SimpleDialog
          delivery={selectedValue}
          open={open}
          onClose={handleClose}
        />
      )}

      {deliverys.map(delivery => (
        <ENCOMENDAS>
          <IdEncomenda>
            <span>{delivery.id}</span>
          </IdEncomenda>
          <Destinatario>
            <span>{delivery.recipient.name}</span>
          </Destinatario>
          <Entregador>{delivery.deliveryman.name}</Entregador>
          <Cidade>{delivery.recipient.cidade}</Cidade>
          <Estado>{delivery.recipient.estado}</Estado>
          <Status status={delivery.status}>
            <p>
              <p></p>
              {delivery.status}
            </p>
          </Status>

          <Acoes>
            <Acao
              key={delivery.id}
              onMouseOver={() => handleItem(delivery.id)}
              onClick={() => handleItem(delivery.id)}
            >
              <p></p>
              <p></p>
              <p></p>
            </Acao>
            <AcaoList produto={linhas[delivery.id]}>
              <p onClick={() => handleClickOpen(delivery)}>
                <img src={visualizar} alt="Visualizar" /> Visualizar
              </p>
              <div></div>
              <p>
                <img src={caneta} alt="editar" /> Editar
              </p>
              <div></div>
              <p>
                <img src={lixeira} alt="Excluir" /> Excluir
              </p>
            </AcaoList>
          </Acoes>
        </ENCOMENDAS>
      ))}
    </Container>
  );
}
