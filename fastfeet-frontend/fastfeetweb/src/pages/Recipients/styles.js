import styled from "styled-components";

export const Container = styled.div`
  background: #f5f5f5;
`;
export const Header = styled.div`
  /* max-width: 100%; */
  margin: 50px auto;
  margin-bottom: 20px;
  display: flex;
  width: 90%;

  span {
    /* margin-right: 300px; */
    font-size: 20px;
    /* font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif; */
    color: black;
    width: 70%;
    /* padding-left: 10%; */
    font-weight: bold;
    margin-left: 5%;
  }

  @media (max-width: 500px) {
    width: 90%;
    align-items: center;
    span {
      font-size: 15px;
      /* font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif; */
      color: black;
      padding-left: 10%;
      font-weight: bold;
    }
  }
`;

export const INPUTS = styled.div`
  max-width: 100%;
  /* background-color:#ba55d3 */
  margin-top: 20px;
  display: flex;
  width: 90%;

  button {
    height: 30px;
    width: 150px;
    margin-right: 20%;
    background-color: #9400d3;
    color: #ffff;
    border: 0;
    border-radius: 5px;
    font-weight: bold;

    &:hover {
      background: #ba55d3;
    }
  }
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    width: 80%;
    button {
      margin-top: 15px;

      /* width: 80%; */
    }
  }
`;

export const InputSearch = styled.input`
  /* max-width: 100%; */
  width: 200px;
  margin-left: 10%;
  margin-right: 60%;
  border-radius: 5%;
  border-width: 0px;
  padding-left: 20px;
  color: #bebebe;
  font-size: 13px;
  ::placeholder {
    color: #bebebe;
    font-size: 13px;
  }

  @media (max-width: 850px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
    margin-left: 15%;
    margin-right: 10%;
    border-radius: 5%;
    border-width: 0px;
    padding-left: 20px;
    color: #bebebe;
    font-size: 13px;
    height: 50px;
  }
`;

export const HEADERTABLE = styled.div`
  width: 80%;
  max-width: 78%;
  margin-top: 20px;
  display: flex;
  margin-left: 10%;
  align-items: center;
  font-weight: bold;

  /* span {
    font-weight: bold;
    font-size: 15px;
    margin-right: 9%;
  } */
`;

export const LISTA = styled.div`
  max-width: 80%;
  margin-left: 9%;
  /* margin: 50px auto; */
  background: #ffff;
  margin-top: 20px;
  height: 50px;
  display: flex;
  /* display: inline-block; */
  /* flex-direction: row; */
  color: black;
  border-color: #fff;
  border-width: 10px;
  border-radius: 5%;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  height: 30%;
  span {
    /* font-weight: bold; */
    font-size: 14px;
    /* margin-right: 100px; */
    padding-left: 15px;
  }

  @media (max-width: 800px) {
    max-width: 90%;
    margin-left: 9%;
    /* margin: 50px auto; */
    background: #ffff;
    height: 30%;
  }
`;

export const IdEncomenda = styled.div`
  width: 20%;
  span {
    font-weight: bold;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export const FOTO = styled.div`
  /* margin-left: 9%;
  max-width: 200px; */
  margin-bottom: 10px;

  width: 20%;
  @media (max-width: 500px) {
    width: 20%;
  }
`;

export const FOTOAVATAR = styled.div`
  padding-left: 10px;
  width: 20%;
  @media (max-width: 500px) {
    width: 20%;
  }
`;

export const NOME = styled.div`
  /* margin-left: 10%; */
  max-width: 30%;
  width: 25%;
  /* padding-top: 10px; */

  @media (max-width: 500px) {
    width: 25%;
    margin-left: 10px;
    p {
      /* padding-left: 1px; */
      padding-right: 1px;
      padding-left: 10px;
      margin-left: 10px;
      display: flex;
      width: 25%;
    }
  }
`;

export const ENDERECO = styled.div`
  /* margin-left: 10%; */
  max-width: 35%;
  width: 30%;
  /* padding-top: 10px; */

  @media (max-width: 500px) {
    width: 25%;

    /* padding-left: 1px; */
    padding-right: 1px;
    margin-left: 10px;
    display: flex;
    width: 20%;
  }
`;

export const Acao = styled.div`
  /* max-width: 200px; */
  /* width: 10%; */
  display: flex;
  align-items: center;
  p {
    background-color: #bebebe;
    width: 3px;
    height: 3px;
    margin-top: 10px;
    margin-left: 2px;
    border-radius: 50%;
  }
  div {
    display: none;
  }

  @media (max-width: 500px) {
    display: flex;
    align-items: center;

    p {
      background-color: #ad3;
      width: 5px;
      height: 5px;
      margin-top: 10px;
      border-radius: 50%;
      box-sizing: 10px;
    }
    div {
      display: block;
    }
  }
`;

export const Acoes = styled.div`
  flex-direction: column;
  align-items: center;
  padding-left: 200px;
  @media (max-width: 500px) {
    padding-left: 100px;
    width: 10%;
  }
`;
export const AcaoList = styled.div`
  font-size: 12px;
  color: black;
  display: ${(props) => (props.linha ? "block" : "none")};
  background-color: white;
  margin-top: 5px;
  padding-right: 30px;
  position: absolute;
  /* margin-left: 10px; */
  img {
    height: 20px;
    margin-top: 2px;
  }
`;
