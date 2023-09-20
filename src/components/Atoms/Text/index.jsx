import { TextStyle } from "./styles.js";
import PropTypes from "prop-types";

export default function Text({children, color, fontSize, as}) {
  return <TextStyle as={as} color={color} fontSize={fontSize}>{children}</TextStyle>
}

Text.prototype = {
  children: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  as: PropTypes.oneOf(["p", "h1", "h2", "h3", "h4", "h5", "h6"])
}
