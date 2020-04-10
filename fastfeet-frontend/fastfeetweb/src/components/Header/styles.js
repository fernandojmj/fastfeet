import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  p {
    color: #bebebe;

    font-size: 20px;
    font-style: italic;
  }
  width: 100%;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 1px;
      /* padding-right: 30px; */
      margin-left: 1px;
      /* border-right: 1px solid #eee; */
      height: 20px;
    }
    strong {
      font-weight: bold;
      color: #9159c1;
    }

    aside {
      display: flex;
      align-items: center;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  /* padding-left: 10px; */
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 2px;

    strong {
      display: flex;
      font-size: 12px;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 10px;
      color: #ff0000;
    }
  }
  img {
    height: 32px;
    border-radius: 50%;
  }
  @media (max-width: 500px) {
    div {
      text-align: center;
      margin-right: 0px;
    }
    img {
      /* display: none; */
      height: 50px;
    }
  }
`;

export const DivMenu = styled.div`
  background: #bebebe;
  border-radius: 40%;
  color: #bebebe;
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-left: 30px;
  height: 30px;
  border-width: 1px;
  border-color: #bebebe;
  padding: 1px;

  @media (max-width: 500px) {
    strong {
      margin-right: 15px;
    }
  }
`;

export const LinkEncomendas = styled.a`
  color: ${(props) => (props.linkEncomendas ? "black" : "#bebebe")};
  margin: 20px;
  font-weight: bold;
  @media (max-width: 500px) {
    display: none;
  }
`;
export const LinkEntregadores = styled.a`
  /* color: #bebebe; */
  color: ${(props) => (props.linkEntregadores ? "black" : "#bebebe")};
  font-weight: bold;
  margin: 20px;
  @media (max-width: 500px) {
    display: none;
  }
`;
export const LinkDestinatarios = styled.a`
  /* color: #bebebe; */
  color: ${(props) => (props.linkDestinatarios ? "black" : "#bebebe")};
  font-weight: bold;
  margin: 20px;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const LinkProblemas = styled.a`
  /* color: #bebebe; */
  color: ${(props) => (props.linkProblemas ? "black" : "#bebebe")};
  font-weight: bold;
  margin: 20px;
  @media (max-width: 500px) {
    display: none;
  }
`;
