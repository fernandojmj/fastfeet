import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  img {
    /* display: flex; */
    margin-left: 40%;
    height: 150px;
    border-radius: 50%;
    border-color: #fff;
    border: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgb(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 20px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    textarea {
      background: rgb(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 300px;
      padding: 10px 15px;
      color: #fff;
      margin: 0 0 20px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    hr {
      border: 1;
      height: 1px;
      /* background: rgba(255rgba (255, 255, 255, 255)); */
      margin: 10px 0 20px;
    }

    button {
      /* margin: 5px; */
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 14px;
      transition: background 0.25s;
      width: 100%;
      margin-bottom: 10px;
      &:hover {
        background: #3b1eff;
      }
    }
  }

  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 14px;
    transition: background 0.25s;

    &:hover {
      background: #f78f;
    }
  }
`;

// export const TextField = styled.text`
//   background: rgb(0, 0, 0, 0.1);
//   border: 0;
//   border-radius: 4px;
//   height: 100px;
//   padding: 0 50px;
//   color: #fff;
//   margin: 0 0 10px;
//   &::placeholder {
//     color: rgba(255, 255, 255, 0.7);
//   }
// `;
