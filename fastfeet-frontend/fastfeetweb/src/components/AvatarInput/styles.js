import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  margin-left: 40%;
  margin-right: 40%;
  label {
    cursor: pointer;
    &::hover {
      opacity: 0.6;
    }

    img {
      margin-top: 20px;
      width: 220px;
      height: 220px;
      border-radius: 50%;
      background-color: #eee;
      /* border: 3px solid; */
      align-self: center;
    }

    input {
      display: none;
    }
  }
`;
