import React from 'react';
import {Animated} from 'react-native';

import {Container, ButtonContainer, ButtonText} from './styles';

const App: React.FC = () => {
  let state = {
    animation: new Animated.Value(0),
    opacity: new Animated.Value(1),
  };
  return (
    <Container>
      <ButtonContainer>
        <Container>
          <ButtonText>Get it!</ButtonText>
        </Container>
      </ButtonContainer>
    </Container>
  );
};

export default App;
