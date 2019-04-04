import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const HomeText = styled.Text``;

const Home = () => {
  return (
    <HomeContainer>
      <HomeText>Test</HomeText>
    </HomeContainer>
  );
};

export default Home;
