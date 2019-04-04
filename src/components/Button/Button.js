import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FONT_COLOR } from 'src/constatns/Styles/Color';
import { LOGIN_HEIGHT } from 'src/constatns/Styles/Size';

const LoginButton = styled.TouchableOpacity`
  flex-direction: row;
  width: ${props => props.width};
  height: ${LOGIN_HEIGHT};
  margin-bottom: 12px;
  margin-right: 12px;
  background-color: ${props => props.bkColor};
  justify-content: center;
  align-items: center;
`;
const LoginButtonText = styled.Text`
  color: ${FONT_COLOR};
  text-align: center;
`;

const Button = ({ text, ...props }) => {
  return (
    <LoginButton {...props}>
      <LoginButtonText>{text}</LoginButtonText>
    </LoginButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  bkColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Button.defaultProps = {
  bkColor: 'null',
  width: '100%',
};

export default Button;
