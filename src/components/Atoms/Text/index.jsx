import { TextStyle } from "./styles.js";

export default function Text({children, color}) {
  return <TextStyle color={color}>{children}</TextStyle>
}
