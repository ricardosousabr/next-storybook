import PropTypes from "prop-types";

export default function TextArea({cols, disabled, placeholder, maxlength, rows}) {
  return <textarea cols={cols} disabled={disabled} placeholder={placeholder} maxlength={maxlength} rows={rows}></textarea>
}

TextArea.propTypes = {
  cols: PropTypes.string,
  disabled: PropTypes.boolean,
  placeholder: PropTypes.string,
  maxlength: PropTypes.number,
  rows: PropTypes.number,
}