import { ButtonStyle } from "./styles";
import PropTypes from "prop-types";

export default function Button({ children, type, onClick, href }) {
  const buttonType = {
    type: type,
    onClick: onClick,
  }
  const anchorType = {
    as: "a",
    href: href
  }
  return <ButtonStyle { ...href ? anchorType : buttonType }>{children}</ButtonStyle>;
}

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
  type: PropTypes.oneOf(["submit", "reset", "button"]),
};

Button.defaultProps = {
  children: "ttt",
};
