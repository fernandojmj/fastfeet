import React, { useState, useRef, useEffect } from "react";
import history from "~/services/history";
import { BUTTON, BUTTONS } from "./styles";

export default function Button(props) {
  const { action, pageBack } = props;

  async function changePage(page) {
    history.push(page);
  }

  return (
    <BUTTONS>
      {action === "back" ? (
        <a onClick={() => changePage(pageBack)}>
          <BUTTON action={true}> VOLTAR</BUTTON>
        </a>
      ) : (
        <BUTTON action={false} type="submit">
          {" "}
          SALVAR
        </BUTTON>
      )}
    </BUTTONS>
  );
}
