import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  CancelarProblemsRequest,
  getProblemsRequest,
  selectProdutos,
} from "~/store/modules/problems/actions";

import visualizar from "~/assets/visualizar.png";
import lixeira from "~/assets/lixeira_excluir.png";
import SimpleDialog from "~/components/SimpleDialog";

import {
  Container,
  Header,
  HEADERTABLE,
  LISTA,
  IdEncomenda,
  DESCRICAO,
  Acao,
  AcaoList,
  Acoes,
} from "~/pages/Problems/styles";
import { de } from "date-fns/locale";

// import { Container } from './styles';

export default function Problems() {
  const dispatch = useDispatch();
  let Problems = useSelector((state) => state.problems.problems);
  let linhas = useSelector((state) => state.problems.linhas);
  console.tron.log("problems State: ");
  console.tron.log(Problems);

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();

  function handleClickOpen(problems) {
    setOpen(true);
    console.tron.log("Valor selecionado");
    setSelectedValue(problems);
  }

  const handleClose = (value) => {
    setOpen(false);
  };

  async function handleCancelarItem(id, IdDelivery) {
    if (
      window.confirm(
        "Tem certeza que deseja cancelar Encomenda: " + IdDelivery + " ?"
      )
    ) {
      dispatch(CancelarProblemsRequest(id));
    }
  }
  async function handleItem(id) {
    console.tron.log(linhas);
    dispatch(selectProdutos(linhas, id));
  }

  useEffect(() => {
    async function getMeetUps() {
      Problems = dispatch(getProblemsRequest());
    }
    getMeetUps();
  }, []);

  return (
    <Container>
      <Header>
        <span>Gerenciando Problemas</span>
      </Header>

      {selectedValue === undefined ? null : (
        <SimpleDialog
          funcao={"problems"}
          dados={selectedValue}
          open={open}
          onClose={handleClose}
        />
      )}

      <HEADERTABLE>
        <IdEncomenda>ID</IdEncomenda>
        <DESCRICAO>Problemas</DESCRICAO>

        <Acoes>Ações</Acoes>
      </HEADERTABLE>

      {Problems.map((item) => (
        <LISTA>
          <IdEncomenda>
            <span>{item.id}</span>
          </IdEncomenda>
          <DESCRICAO>
            <p>{item.description.toUpperCase()}</p>
          </DESCRICAO>

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
              <p onClick={() => handleClickOpen(item)}>
                <img src={visualizar} alt="Visualizar" /> Visualizar
              </p>
              <div></div>
              <p onClick={() => handleCancelarItem(item.id, item.delivery_id)}>
                <img src={lixeira} alt="Cancelar encomenda" /> Cancelar
                Encomenda
              </p>
            </AcaoList>
          </Acoes>
        </LISTA>
      ))}
    </Container>
  );
}
