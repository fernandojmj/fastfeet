import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Notification from "~/components/Notifications";
import Menu from "~/components/Menu";
import {
  Container,
  Content,
  Profile,
  DivMenu,
  LinkEncomendas,
  LinkEntregadores
} from "./styles";
import history from "~/services/history";

import { signOut } from "~/store/modules/auth/actions";

// import { Content } from "~/pages/_layouts/auth/styles";
import { Link } from "react-router-dom";
import logo from "~/assets/fastfeet-logo.png";

export default function Header() {
  let profile = useSelector(state => state.user.profile);
  const [linkEncomendas, setLinkEncomendas] = useState(true);
  const [linkEntregadores, setLinkEntregadores] = useState(false);

  const dispatch = useDispatch();

  function signout() {
    dispatch(signOut());
  }

  function selecionarEncomendas() {
    setLinkEncomendas(true);
    setLinkEntregadores(false);
    history.push("/dashboard");
  }

  function selecionarEntregadores() {
    setLinkEncomendas(false);
    setLinkEntregadores(true);
    history.push("/newmeet");
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Fast Feet" />
          </Link>
          <DivMenu></DivMenu>
          <LinkEncomendas
            linkEncomendas={linkEncomendas}
            onClick={selecionarEncomendas}
          >
            ENCOMENDAS
          </LinkEncomendas>
          <LinkEntregadores
            linkEntregadores={linkEntregadores}
            onClick={selecionarEntregadores}
          >
            ENTREGADORES
          </LinkEntregadores>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link onClick={signout}>Sair do sistema</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
