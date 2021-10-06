import { HeaderStyled } from "./Header.styled";
import PropTypes from 'prop-types';
import Button from "../button/Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <HeaderStyled>
      <h1>{title}</h1>

      <Button 
        color={showAdd ? '#df4759' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onToggle={onAdd}
      />
    </HeaderStyled>
  )
}

// Default proptypes
Header.defaultProps = {
  title: 'Music App'
}

// PropTypes
Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
