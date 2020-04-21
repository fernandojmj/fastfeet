import React from "react";
import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import Avatar from "@material-ui/core/Avatar";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import ListItemText from "@material-ui/core/ListItemText";
// import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
// import PersonIcon from "@material-ui/icons/Person";
// import AddIcon from "@material-ui/icons/Add";
// import Typography from "@material-ui/core/Typography";
// import { blue } from "@material-ui/core/colors";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import { MODAL, DATAS, DATA, LINHA, LABEL, Signature } from "./styles";
import { date } from "yup";

// const emails = ["username@gmail.com", "user02@gmail.com"];

export default function SimpleDialog(props) {
  // const classes = useStyles();
  const { onClose, selectedValue, open, dados, funcao } = props;
  console.tron.log(dados);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  function formatarDate(data) {
    if (data != null) {
      return format(new Date(data), "dd/MM/yyyy");
    } else {
      return "";
    }
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="Encomenda" open={open}>
      {funcao == "delivery" ? (
        <MODAL>
          <span>Informações da emcomenda</span>
          <p>
            {dados.recipient.rua}, {dados.recipient.numero}
          </p>
          <p>
            {dados.recipient.cidade} - {dados.recipient.estado}
          </p>
          <p>{dados.recipient.cep}</p>
          <LINHA></LINHA>
          <span>Datas</span>
          <DATAS>
            <LABEL>Retirada: </LABEL>
            <DATA>{formatarDate(dados.startDate)}</DATA>
          </DATAS>
          <DATAS>
            <LABEL>Entrega: </LABEL>
            <DATA>{formatarDate(dados.endDate)}</DATA>
          </DATAS>
          <LINHA></LINHA>
          <span>Assinatura do destinatário</span>
          {(dados.signatureId !== "") &
          (dados.signature_id !== undefined) &
          (dados.signature_id !== null) ? (
            <Signature>
              <img src={dados.signature_id.url} alt=""></img>
            </Signature>
          ) : (
            ""
          )}
        </MODAL>
      ) : (
        <MODAL>
          <span>VISUALIZAR PROBLEMA</span>
          <p>{dados.description}</p>
        </MODAL>
      )}
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
