import React from 'react';
import styled from 'styled-components';

const LoginLogo = styled.Image``;

/* eslint-disable global-require */
// when loading images, not use global-require of eslint
const Logo = () => <LoginLogo source={require('src/assets/images/logo.png')} />;

export default Logo;
