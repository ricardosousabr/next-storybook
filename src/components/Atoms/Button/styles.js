import { styled } from "styled-components";

export const ButtonStyle = styled.button`
  background:  ${(props) => props.background};
  border: none;
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding} ;

`;
