import { BoxButton, ButtonAqua, ButtonPurple } from "./styles";
import PropTypes from "prop-types";

export default function Button({ children, type, onClick, ButtonStyles }) {
  return (
    <>
      <BoxButton>
        <ButtonAqua type={type} onClick={onClick}>
          {children}
        </ButtonAqua>
      </BoxButton>
    </>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  type: PropTypes.oneOf(["submit", "reset", "button"]).isRequired,
};
