import styled, { css } from "styled-components";

export const MODAL = styled.div`
  flex-direction: column;
  width: 400px;
  height: 300px;
  margin-top: 30px;
  span {
    padding-left: 10px;
    padding-top: 50px;
    font-weight: bold;
    font-size: 12px;
  }
  p {
    padding-left: 10px;
  }
  div {
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;

    height: 1px;
    width: 90%;
    background-color: #d3d3d3;
    opacity: 30%;
  }
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
