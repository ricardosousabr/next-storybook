import PropTypes from "prop-types";
import {InputStyle} from "./styles.js"

export default function Input({ type, placeholder, value, borderRadius, padding }) {
  return <InputStyle padding={padding} borderRadius={borderRadius} value={value} placeholder={placeholder} type={type} />
}

Input.prototype = {
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["button", "checkbox", "color", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"])
}