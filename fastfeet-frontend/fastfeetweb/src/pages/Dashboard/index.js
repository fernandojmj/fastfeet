import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import {
  getDeliveryRequest,
  getDeliveryByEncomendaRequest,
  selectProdutos,
  DeleteDeliveryRequest,
  selectDelivery,
} from "~/store/modules/delivery/actions";
import history from "~/services/history";

// import "./styles.css";

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
  Acoes,
} from "~/pages/Dashboard/styles";

export default function Dashboard() {
  const dispatch = useDispatch();
  let deliverys = useSelector((state) => state.delivery.deliverys);
  let linhas = useSelector((state) => state.delivery.produtos);

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(deliverys[1]);

  function handleClickOpen(delivery) {
    setOpen(true);
    console.tron.log("Valor selecionado");
    setSelectedValue(delivery);
  }

  const handleClose = (value) => {
    setOpen(false);
  };

  async function handleItem(idDelivery) {
    dispatch(selectProdutos(linhas, idDelivery));
  }

  async function handleDeleteItem(idDelivery) {
    if (
      window.confirm(
        "Tem certeza que deseja excluir encomenda: " + idDelivery + " ?"
      )
    ) {
      dispatch(DeleteDeliveryRequest(idDelivery));
    }
  }

  async function handleEditItem(delivery) {
    dispatch(selectDelivery(delivery));
    history.push("/EditDelivery");
  }

  useEffect(() => {
    async function getMeetUps() {
      dispatch(getDeliveryRequest());
    }
    getMeetUps();
  }, []);

  async function seachByEncomenda(event) {
    dispatch(await getDeliveryByEncomendaRequest(`${event.target.value}`));
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",

      "& > *": {
        margin: theme.spacing(2),
      },
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
        <span>Gerenciando encomendas</span>
      </Header>
      <INPUTS>
        <InputSearch
          name="search"
          placeholder="Buscar por Encomendas"
          onChange={(e) => seachByEncomenda(e)}
        ></InputSearch>
        <a href="/cadDelivery">
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
          funcao={"delivery"}
          dados={selectedValue}
          open={open}
          onClose={handleClose}
        />
      )}

      {deliverys.map((delivery) => (
        <ENCOMENDAS>
          <IdEncomenda>
            <span>{delivery.id}</span>
          </IdEncomenda>
          <Destinatario>
            <span>{delivery.recipient.name.toUpperCase()}</span>
          </Destinatario>

          <Entregador>
            {delivery.deliveryman.avatarid != undefined ? (
              <Avatar src={delivery.deliveryman.avatarid.url}></Avatar>
            ) : (
              <Avatar className={classes.purple}>
                {delivery.deliveryman.name[0].toUpperCase()}{" "}
                {delivery.deliveryman.name[1].toUpperCase()}
              </Avatar>
            )}
            <p>{delivery.deliveryman.name.toUpperCase()}</p>
          </Entregador>
          <Cidade>{delivery.recipient.cidade.toUpperCase()}</Cidade>
          <Estado>{delivery.recipient.estado.toUpperCase()}</Estado>
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
              <p onClick={() => handleEditItem(delivery)}>
                <img src={caneta} alt="editar" /> Editar
              </p>
              <div></div>
              <p onClick={() => handleDeleteItem(delivery.id)}>
                <img src={lixeira} alt="Excluir" /> Excluir
              </p>
            </AcaoList>
          </Acoes>
        </ENCOMENDAS>
      ))}
    </Container>
  );
}
