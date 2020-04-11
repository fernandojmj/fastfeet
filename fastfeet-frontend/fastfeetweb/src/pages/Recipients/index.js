import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { takeLatest, all, call, put } from "redux-saga/effects";

import {
  getRecipientsRequest,
  getRecipientsByNameRequest,
  selectProdutos,
  DeleteRecipientsRequest,
  selectRecipients,
} from "~/store/modules/recipient/actions";
import history from "~/services/history";

import caneta from "~/assets/caneta_edit.png";
import lixeira from "~/assets/lixeira_excluir.png";

import {
  Container,
  Header,
  HEADERTABLE,
  LISTA,
  INPUTS,
  InputSearch,
  IdEncomenda,
  NOME,
  Acao,
  AcaoList,
  Acoes,
  ENDERECO,
} from "~/pages/Recipients/styles";

export default function Recipients() {
  const dispatch = useDispatch();
  let Recipients = useSelector((state) => state.recipient.recipients);
  let linhas = useSelector((state) => state.recipient.linhas);
  console.tron.log("Recipients State: ");
  console.tron.log(Recipients);
  async function handleItem(id) {
    console.tron.log(linhas);
    dispatch(selectProdutos(linhas, id));
  }

  async function handleDeleteItem(id) {
    if (
      window.confirm(
        "Tem certeza que deseja excluir Destinatário: " + id + " ?"
      )
    ) {
      dispatch(DeleteRecipientsRequest(id));
    }
  }

  async function handleEditItem(recipient) {
    console.tron.log(recipient);
    dispatch(selectRecipients(recipient));
    history.push("/EditRecipients");
  }

  useEffect(() => {
    async function getMeetUps() {
      Recipients = dispatch(getRecipientsRequest());
    }
    getMeetUps();
    console.tron.log("Recipient");
    console.tron.log(Recipients);
  }, []);

  async function seachByRecipients(event) {
    dispatch(await getRecipientsByNameRequest(`${event.target.value}`));
  }

  return (
    <Container>
      <Header>
        <span>Gerenciando Destinatários</span>
      </Header>
      <INPUTS>
        <InputSearch
          name="search"
          placeholder="Buscar por Destinatários"
          onChange={(e) => seachByRecipients(e)}
        ></InputSearch>
        <a href="/cadRecipients">
          <button> CADASTRAR</button>
        </a>
      </INPUTS>
      <HEADERTABLE>
        <IdEncomenda>ID</IdEncomenda>
        <NOME>Nome</NOME>
        <ENDERECO>Endereço</ENDERECO>

        <Acoes>Ações</Acoes>
      </HEADERTABLE>

      {Recipients.map((item) => (
        <LISTA>
          <IdEncomenda>
            <span>{item.id}</span>
          </IdEncomenda>
          <NOME>{item.name.toUpperCase()}</NOME>
          <ENDERECO>
            {item.rua.toUpperCase()}, {item.numero}, {item.cidade.toUpperCase()}
            {" - "} {item.estado.toUpperCase()}
          </ENDERECO>
          <Acoes>
            <Acao
              key={item.id}
              onMouseOver={() => handleItem(item.id)}
              onClick={() => handleItem(item.id)}
            >
              <p></p>
              <p></p>
              <p></p>
              <div>...</div>
            </Acao>
            <AcaoList linha={linhas[item.id]}>
              <p onClick={() => handleEditItem(item)}>
                <img src={caneta} alt="editar" /> Editar
              </p>
              <div></div>
              <p onClick={() => handleDeleteItem(item.id)}>
                <img src={lixeira} alt="Excluir" /> Excluir
              </p>
            </AcaoList>
          </Acoes>
        </LISTA>
      ))}
    </Container>
  );
}
