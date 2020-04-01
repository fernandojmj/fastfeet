import React, { useState } from "react";

import { MdNotifications } from "react-icons/md";

import { Container, Badge, NotificationList, Notification } from "./styles";

export default function Notifications() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
    console.log(visible);
  }

  return (
    <Container>
      <Badge hasUnread onClick={handleToggleVisible}>
        <MdNotifications color="#7159c1" size={20}></MdNotifications>
      </Badge>
      <NotificationList visible={visible}>
        <Notification unread>
          <p>Você possui um novo agendamento</p>
          <time>2 dias</time>
          <button type="button">marque como lida</button>
        </Notification>
        <Notification>
          <p>Você possui um novo agendamento</p>
          <time> há 2 dias</time>
          <button type="button">marque como lida</button>
        </Notification>
        <Notification>
          <p>Você possui um novo agendamento</p>
          <time> há 2 dias</time>
          <button type="button">marque como lida</button>
        </Notification>
      </NotificationList>
    </Container>
  );
}
