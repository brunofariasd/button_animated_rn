import React, {useState} from 'react';
import {Animated, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import {
  Container,
  ButtonContainer,
  ButtonText,
  ContentButton,
  ContainerAnimation,
  styles,
} from './styles';

interface AnimationObject {
  animation: Animated.Value;
  opacity: Animated.Value;
}

const App: React.FC = () => {
  const stateAnimation: AnimationObject = {
    animation: new Animated.Value(0),
    opacity: new Animated.Value(1),
  };

  const handlePressButtonAnimation = () => {
    stateAnimation.animation.setValue(0);
    stateAnimation.opacity.setValue(1);

    Animated.timing(stateAnimation.animation, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        Animated.timing(stateAnimation.opacity, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }).start();
      }
    });
  };

  const progressInterpolate = stateAnimation.animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  const colorInterpolate = stateAnimation.animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(71,255,99)', 'rgb(99,71,255)'],
  });

  const progressStyle = {
    width: progressInterpolate,
    bottom: 0,

    //Descendo de baixo pra cima
    // height: progressInterpolate,
    // right: 0,

    //Pequena linha no rodapé do botão
    // top: null,
    // bottom: 0,
    // width: progressInterpolate,
    // height: 5,

    opacity: stateAnimation.opacity,
    backgroundColor: colorInterpolate,
  };

  return (
    <Container>
      <ContentButton onPress={handlePressButtonAnimation}>
        <ButtonContainer>
          <ContainerAnimation style={StyleSheet.absoluteFill}>
            <Animated.View
              style={[styles.progress, styles.opacityBackground, progressStyle]}
            />
          </ContainerAnimation>
          <ButtonText>APERTE</ButtonText>
        </ButtonContainer>
      </ContentButton>
    </Container>
  );
};

export default App;
