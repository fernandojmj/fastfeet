import styled from "styled-components";

export const Container = styled.div`
  background: #f5f5f5;

  max-width: 100%;
  align-self: center;
  width: 80%;
  margin-left: 20%;
  margin-right: 20%;
`;
export const Header = styled.div`
  max-width: 100%;
  margin-top: 30px;

  margin-bottom: 20px;

  width: 100%;
  display: flex;

  span {
    font-size: 20px;
    color: black;
    width: 60%;
    font-weight: bold;
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

export const DIVFORM = styled.div`
  background-color: white;
  width: 80%;
  height: 250px;
  max-width: 80%;
  align-items: center;
  padding-bottom: 40px;
  display: column;
  padding-right: 4%;
  padding-top: 30px;
`;

export const INPUTNAME = styled.div`
  margin-left: 4%;
  align-items: center;
  input {
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    margin-top: 5px;
    padding-left: 10px;
  }
  label {
    width: 100%;
    font-weight: bold;
  }
`;

export const DIVSELECTS = styled.div`
  margin-left: 4%;
  width: 100%;
  display: flex;

  input {
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    margin-top: 5px;
  }
`;
export const LABELDESTINATARIO = styled.div`
  margin-right: 2%;
  width: 50%;
  margin-bottom: 10px;
  label {
    font-weight: bold;
  }
`;
export const LABELENTREGADOR = styled.div`
  margin-right: 2%;
  width: 50%;
  margin-bottom: 10px;
  label {
    font-weight: bold;
  }
`;
