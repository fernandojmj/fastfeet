import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { takeLatest, all, call, put } from "redux-saga/effects";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import {
  getDeliveryManRequest,
  getDeliveryManByNameRequest,
  DeleteDeliveryManRequest,
  selectProdutos,
  selectDeliveryMan,
} from "~/store/modules/deliveryMan/actions";

import caneta from "~/assets/caneta_edit.png";
import lixeira from "~/assets/lixeira_excluir.png";
import visualizar from "~/assets/visualizar.png";
import SimpleDialog from "~/components/SimpleDialog";
import history from "~/services/history";
import {
  Container,
  Header,
  HEADERTABLE,
  LISTA,
  INPUTS,
  InputSearch,
  IdEncomenda,
  FOTO,
  FOTOAVATAR,
  NOME,
  Acao,
  AcaoList,
  Acoes,
} from "~/pages/DeliveryMan/styles";
import { de } from "date-fns/locale";

// import { Container } from './styles';

export default function DeliveryMan() {
  const dispatch = useDispatch();
  let deliverysMan = useSelector((state) => state.deliveryMan.deliverysMan);
  let linhas = useSelector((state) => state.deliveryMan.linhas);

  async function handleItem(id) {
    console.tron.log(linhas);
    dispatch(selectProdutos(linhas, id));
  }

  async function handleDeleteItem(id) {
    if (
      window.confirm("Tem certeza que deseja excluir entregador: " + id + " ?")
    ) {
      dispatch(DeleteDeliveryManRequest(id));
    }
  }

  async function handleEditItem(deliveryMan) {
    dispatch(selectDeliveryMan(deliveryMan));
    history.push("/EditDeliveryMan");
  }

  useEffect(() => {
    let response;
    async function getMeetUps() {
      response = dispatch(getDeliveryManRequest());
    }
    getMeetUps();
  }, []);

  async function seachByEntregador(event) {
    dispatch(await getDeliveryManByNameRequest(`${event.target.value}`));
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      // "& > *": {
      //   margin: theme.spacing(2)
      // }
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
  }));

  const classes = useStyles();

  return (
    <Container>
      <Header>
        <span>Gerenciando entregadores</span>
      </Header>
      <INPUTS>
        <InputSearch
          name="search"
          placeholder="Buscar por Entregadores"
          onChange={(e) => seachByEntregador(e)}
        ></InputSearch>
        <a href="/cadDeliveryMan">
          <button> CADASTRAR</button>
        </a>
      </INPUTS>
      <HEADERTABLE>
        <IdEncomenda>ID</IdEncomenda>
        <FOTO>
          <span>Foto</span>
        </FOTO>
        <NOME>Nome</NOME>
        <NOME>Email</NOME>

        <Acao>Ações</Acao>
      </HEADERTABLE>

      {deliverysMan.map((item) => (
        <LISTA>
          <IdEncomenda>
            <span>{item.id}</span>
          </IdEncomenda>
          <FOTO>
            <FOTOAVATAR>
              {item.avatarid != undefined ? (
                <Avatar src={item.avatarid.url}></Avatar>
              ) : (
                <Avatar className={classes.purple}>
                  {item.name[0].toUpperCase()} {item.name[1].toUpperCase()}
                </Avatar>
              )}
            </FOTOAVATAR>
          </FOTO>
          <NOME>{item.name.toUpperCase()}</NOME>
          <NOME>{item.email.toUpperCase()}</NOME>

          <Acoes>
            <Acao
              key={item.id}
              onMouseOver={() => handleItem(item.id)}
              onClick={() => handleItem(item.id)}
            >
              <p></p>
              <p></p>
              <p></p>
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
