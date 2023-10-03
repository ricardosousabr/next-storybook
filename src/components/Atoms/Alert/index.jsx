import { BoxAlert } from "./styles.js"
import Text from "../Text"
import PropTypes from "prop-types";

export default function Alert({children, color, fontSize, background}) {
  return (
    <>
      <BoxAlert background={background}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11V17H13V11H11ZM11 7V9H13V7H11Z"></path></svg>
        </div>
        <div>
          <Text color={color} fontSize={fontSize}>{children}</Text>
        </div>
      </BoxAlert>
    </>
  )
}

Alert.propTypes = {
  children: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
}