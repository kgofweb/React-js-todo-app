import { ButtonStyled } from "./Button.styled";
import PropTypes from 'prop-types';

const Button = ({ color, text, onToggle }) => {
  return (
    <ButtonStyled
      style={{ backgroundColor: color }}
      onClick={onToggle}
    >
      {text}
    </ButtonStyled>
  )
}

Button.defaultProps = {
  color: 'skyblue',
  text: 'Add Todo'
}

// PropTypes
Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onToggle: PropTypes.func.isRequired
}

export default Button
