import { BoxButton, ButtonAqua, ButtonPurple } from "./styles";
import PropTypes from "prop-types";

export default function Button({ children, type, onClick, href }) {
  return (
    <>
      <BoxButton>
        {href ? (
          <ButtonAqua href={href} as="a" type={type}>
            {children}
          </ButtonAqua>
        ) : (
          <ButtonAqua type={type} onClick={onClick}>
            {children}
          </ButtonAqua>
        )}
      </BoxButton>
    </>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
  type: PropTypes.oneOf(["submit", "reset", "button"]).isRequired,
};
