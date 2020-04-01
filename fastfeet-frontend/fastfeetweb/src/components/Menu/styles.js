import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Menu = styled.button`
  background: none;
  border: 0;
  color: #ffff;
  left: -40x;
  /* position: relative; */
  strong {
    font-size: 15px;
    margin-left: 20px;
  }
`;

export const MenuList = styled.div`
  position: absolute;
  width: 100px;
  left: -40x;
  top: 100%;
  background: #ffff;
  border-radius: 4px;
  padding: 20px;
  align-items: center;
  border-color: #fff;
  p {
    font-size: 15px;
    line-height: 18px;
    padding: 2px 2px 2px 2px;

    color: #9159c1;
  }
  display: ${props => (props.visible ? "block" : "none")};
`;

export const I = styled.div`
  border-color: #fff;
  border: 3px;
  align-items: center;
`;
