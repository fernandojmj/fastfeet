import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { Container, Menu, MenuList, I } from "./styles";
import { signOut } from "~/store/modules/auth/actions";
import { Link } from "react-router-dom";

export default function Notifications() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
    console.log(visible);
  }

  const dispatch = useDispatch();
  function signout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Menu hasUnread onClick={handleToggleVisible}>
        <strong>Menu</strong>
      </Menu>
      <MenuList visible={visible}>
        <Link to="/">
          <p>Home</p>
        </Link>

        <Link to="/Profile">
          <p>Perfil</p>
        </Link>

        <Link onClick={signout}>
          <p>Sair</p>
        </Link>
      </MenuList>
    </Container>
  );
}
