import styled, { css } from "styled-components";

export const MODAL = styled.div`
  flex-direction: column;
  width: 400px;
  height: 400px;
  margin-top: 30px;
  padding-bottom: 10px;
  span {
    padding-left: 10px;
    padding-top: 50px;
    font-weight: bold;
    font-size: 13px;
  }
  p {
    padding-left: 10px;
    font-size: 13px;
  }
  div {
  }
`;

export const LINHA = styled.div`
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;

  height: 1px;
  width: 90%;
  background-color: #d3d3d3;
  opacity: 30%;
`;

export const DATAS = styled.div`
  display: flex;
  span {
    font-weight: bold;
  }
`;
export const LABEL = styled.label`
  display: flex;

  font-weight: bold;
  padding-left: 10px;
  font-size: 13px;
`;
export const DATA = styled.label`
  /* display: flex; */
  font-size: 13px;
  padding-left: 5px;
`;

export const Signature = styled.div`
  /* display: flex; */
  margin-left: 10px;
  padding-left: 5px;
  width: 100%;
`;
