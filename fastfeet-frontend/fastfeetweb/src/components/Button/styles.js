import styled from "styled-components";

export const BUTTON = styled.button`
  height: 30px;
  width: 100px;

  background-color: ${(props) => (props.action ? "#D3D3D3" : "#9400d3")};
  color: #ffff;
  border: 0;
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    background: ${(props) => (props.action ? "#808080" : "#ba55d3")};
  }
`;

export const BUTTONS = styled.div`
  max-width: 100%;
  /* background-color:#ba55d3 */

  display: flex;

  width: 10%;

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
