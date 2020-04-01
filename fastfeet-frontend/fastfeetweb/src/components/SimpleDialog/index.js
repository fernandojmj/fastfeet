import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import { MODAL } from "./styles";
import { date } from "yup";

// const emails = ["username@gmail.com", "user02@gmail.com"];

export default function SimpleDialog(props) {
  // const classes = useStyles();
  const { onClose, selectedValue, open, delivery } = props;
  console.tron.log(delivery);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    onClose(value);
  };

  function formatarDate(data) {
    const dateFormated = format(new Date(data), "dd/MM/yyyy");
    return dateFormated;
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="Encomenda" open={open}>
      <MODAL>
        <span>Informações da emcomenda</span>
        <p>
          {delivery.recipient.rua}, {delivery.recipient.numero}
        </p>
        <p>
          {delivery.recipient.cidade} - {delivery.recipient.estado}
        </p>
        <p>{delivery.recipient.cep}</p>
        <div></div>
        <span>Datas</span>
        <p>Retirada - {formatarDate(delivery.startDate)}</p>
        <p>Entrega - {formatarDate(delivery.endDate)}</p>
        <div></div>
      </MODAL>
      {/* <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle> */}
      {/* <List>
        {emails.map(email => (
          <ListItem
            button
            onClick={() => handleListItemClick(email)}
            key={email}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("addAccount")}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List> */}
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
};
