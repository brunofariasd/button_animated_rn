import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  progress: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  opacityBackground: {
    //backgroundColor: 'rgba(255,255,255,.5)',
  },
});

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding: 0 20px;
`;

export const ContentButton = styled(TouchableWithoutFeedback)``;

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  background: #e6537d;
  overflow: hidden;
  width: 100%;
  height: 70px;
`;

export const ButtonText = styled.Text`
  font-size: 36px;
  color: #fff;
  background-color: transparent;
`;

export const ContainerAnimation = styled.View``;
