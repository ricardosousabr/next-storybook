import PropTypes from "prop-types";

export default function Select({children, name, autofocus, disabled, multiple, size }) {
  return (
    <select autofocus={autofocus} name={name} disabled={disabled} multiple={multiple} size={size} >
      <option>1213</option>
      <option>1213</option>
      <option>1213</option>
    </select>
  )
}

Select.propTypes ={
  name: PropTypes.string,
  children: PropTypes.string,
  size: PropTypes.number,
  autofocus: PropTypes.boolean,
  disabled: PropTypes.boolean,
  multiple: PropTypes.boolean,
}