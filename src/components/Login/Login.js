import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from 'src/components/Logo';
import {
  LOGIN_BACKGROUND_COLOR_START,
  LOGIN_BACKGROUND_COLOR_END,
} from 'src/constatns/Styles/Color';
import LoginInputFields from './LoginInputFields';
import LoginButtons from './LoginButtons';

const LoginLinearGradient = styled(LinearGradient)`
  flex: 1;
`;

const LoginContainer = styled.View`
  flex: 1;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

const LoginLogoContainer = styled.View`
  margin-top: 60px;
  justify-content: flex-end;
  flex: 1;
`;

const LoginFieldContainer = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
`;

const LoginInputContainer = styled.View`
  justify-content: center;
`;

const LoginButtonContainer = styled.View`
  align-items: center;
`;

const Login = ({ handleLogin, handleJoin, handleForgotPwd }) => {
  return (
    <LoginLinearGradient colors={[LOGIN_BACKGROUND_COLOR_START, LOGIN_BACKGROUND_COLOR_END]}>
      <LoginContainer>
        <LoginLogoContainer>
          <Logo />
        </LoginLogoContainer>

        <LoginFieldContainer>
          <LoginInputContainer>
            <LoginInputFields />
          </LoginInputContainer>
          <LoginButtonContainer>
            <LoginButtons
              handleLogin={handleLogin}
              handleJoin={handleJoin}
              handleForgotPwd={handleForgotPwd}
            />
          </LoginButtonContainer>
        </LoginFieldContainer>
      </LoginContainer>
    </LoginLinearGradient>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleJoin: PropTypes.func.isRequired,
  handleForgotPwd: PropTypes.func.isRequired,
};

export default Login;
