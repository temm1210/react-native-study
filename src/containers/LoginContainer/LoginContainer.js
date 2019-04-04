import React from 'react';
import Login from 'src/components/Login';
import PropTypes from 'prop-types';

const LoginContainer = ({ navigation }) => {
  console.log('navigation:', navigation);
  const _handleLogin = () => {
    window.alert('click login');
    navigation.navigate('Home');
  };

  const _handleJoin = () => {
    window.alert('click join');
  };

  const _handleForgotPwd = () => {
    window.alert('click ForgotPwd');
  };
  return (
    <Login handleLogin={_handleLogin} handleJoin={_handleJoin} handleForgotPwd={_handleForgotPwd} />
  );
};

LoginContainer.propTypes = {
  navigation: PropTypes.shape({ root: PropTypes.string }).isRequired,
};

export default LoginContainer;
