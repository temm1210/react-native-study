import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'src/components/Button';
import { LOGIN_WIDTH } from 'src/constatns/Styles/Size';

const ButtonWrapper = styled.View`
  flex-direction: ${props => props.flexDirection};
  align-items: center;
`;

const LoginButtons = ({ handleLogin, handleJoin, handleForgotPwd }) => {
  const buttons = [
    {
      key: 'loginButtons',
      flexDirection: 'column',
      loginButtons: [
        {
          text: 'LOGIN',
          bkColor: '#ffdc00',
          width: LOGIN_WIDTH,
          onPress: handleLogin,
        },
        {
          text: 'Facebook',
          bkColor: '#3b5998',
          width: LOGIN_WIDTH,
        },
        {
          text: 'Google',
          bkColor: 'white',
          width: LOGIN_WIDTH,
        },
      ],
    },
    {
      key: 'searchJoinButtons',
      flexDirection: 'row',
      loginButtons: [
        {
          text: 'Forgot password?',
          width: 'auto',
          onPress: handleForgotPwd,
        },
        {
          text: 'Create a new account',
          width: 'auto',
          onPress: handleJoin,
        },
      ],
    },
  ];

  return buttons.map(button => (
    <ButtonWrapper key={button.key} flexDirection={button.flexDirection}>
      {button.loginButtons.map(loginButton => (
        <Button key={loginButton.text} {...loginButton} />
      ))}
    </ButtonWrapper>
  ));
};

LoginButtons.propTypes = {
  handleLogin: PropTypes.func,
  handleJoin: PropTypes.func,
  handleForgotPwd: PropTypes.func,
};

export default LoginButtons;
