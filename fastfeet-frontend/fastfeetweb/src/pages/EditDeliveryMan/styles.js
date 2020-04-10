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
    /* margin-right: 300px; */
    font-size: 20px;
    /* font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif; */
    color: black;
    width: 70%;
    /* padding-left: 10%; */
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

export const BUTTONS = styled.div`
  max-width: 100%;
  /* background-color:#ba55d3 */

  display: flex;

  width: 45%;

  a {
    margin-left: 2%;
  }

  button {
    height: 30px;
    width: 100px;

    margin-left: 2%;
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

export const DIVFORM = styled.div`
  background-color: white;
  width: 100%;
  height: 420px;
  max-width: 80%;
  align-items: center;
  margin-bottom: 20px;
`;
export const IMPUT = styled.div`
  align-items: center;
  margin-left: 4%;
  input {
    width: 95%;
    height: 40px;
    margin-bottom: 10px;
    margin-top: 5px;
  }
  label {
    width: 95%;
    font-weight: bold;
  }
`;
