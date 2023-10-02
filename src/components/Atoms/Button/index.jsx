import { ButtonStyle } from "./styles";
import PropTypes from "prop-types";

export default function Button({ children, type, onClick, href, background, borderRadius, padding }) {
  const buttonType = {
    type: type,
    onClick: onClick,
  }
  const anchorType = {
    as: "a",
    href: href
  }

  return <ButtonStyle padding={padding} borderRadius={borderRadius} background={background} { ...href ? anchorType : buttonType }>{children}</ButtonStyle>;
}

Button.propTypes = {
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  background: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
  type: PropTypes.oneOf(["submit", "reset", "button"]).isRequired,
};

Button.defaultProps = {
  children: "click",
  type: "submit"
};