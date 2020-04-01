import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  /* background: linear-gradient(-90deg, ##8470FF, #7159c1); */
  background-color:#8A2BE2
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 300px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    background-color: #fff;
    align-items: center;

    input {
      background: #fff;
      border-width: 0.5px;
      border-color:#BEBEBE
      border-radius: 4px;
      height: 35px;
      padding: 0 15px;
      color:#BEBEBE;
      margin: 0 0 10px;
      width: 80%;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
      &:focus {
        background: #F8F8FF;
      }
    }

    button {
      margin-top: 5px;
      margin-bottom: 50px;

      height: 30px;
      background: #8A2BE2;

      color: #fff;
      border: 0;
      border-radius: 4px;

      transition: background 0.25s;
      width: 80%;

      &:hover {
        background: #BA55D3;
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.5;

      &:hover {
        opacity: 2;
      }
    }

    span {
      color: black;
      align-self: flex-start;
      margin-left:30px;
      margin-bottom:5px;
      font-display: bold;
      font-weight:bold;
      font-size:10px;
      
    }
    img {
      height: 40px;
      width: 70%;
      margin: 40px;
      align-items: center;
    }
  }
`;
