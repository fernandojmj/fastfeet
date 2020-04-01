import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        height: 8px;
        width: 8px;
        background: #ff892e;
        content: "";
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  left: -140px;
  top: 100%;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 20px;
  display: ${props => (props.visible ? "block" : "none")};

  &::before {
    content: "";
    position: absolute;
    left: calc(50%);
    top: -20px;
    width: 0;
    height: 0;
    border-left: solid 20px transparent;
    border-right: solid 20px transparent;
    border-bottom: solid 20px rgba(0, 0, 0, 0.6);
  }
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    font-size: 12px;
    opacity: 0.6;
  }

  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: #ff9992;
    padding: 0, 5px;
    margin: 0, 5px;
    border-left: 5px solid rgba(255, 255, 255, 0.1);
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        content: "";
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #ff892e;
        border-radius: 50%;
        margin: 10px;
      }
    `}
`;
