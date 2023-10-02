import PropTypes from "prop-types";
import {InputStyle} from "./styles.js"

export default function Input({ type, placeholder, value, borderRadius, padding, label, disabled }) {
  return <InputStyle padding={padding} borderRadius={borderRadius} value={value} placeholder={placeholder} type={type} label={label} disabled={disabled} />
}

Input.prototype = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  disabled: PropTypes.boolean,
  type: PropTypes.oneOf(["button", "checkbox", "color", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"])
}