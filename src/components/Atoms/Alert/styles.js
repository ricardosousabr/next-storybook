import { styled } from "styled-components";

export const BoxAlert = styled.div`
  padding: 0 20px;
  background: ${(props) => props.background};
  border-radius: 4px;
  border: 1px solid red;
  display: flex;
  align-items: center;
`