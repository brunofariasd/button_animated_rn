import { Pressable, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
  justify-content: center;
  align-items: center;

  padding: 0 20px;
`;

export const ContainerButton = styled.View`
  justify-content: center;
  flex-direction: row;
  width: 100%;
`;

export const ButtonContainer = styled(TouchableWithoutFeedback)`
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  margin-right: 10px;

  background: #fc03f8;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  color: #ffffff;
`;

export const ContainerValue = styled.View`
  width: 180px;
  height: 120px;
  justify-content: center;
  align-items: center;

  margin-bottom: 10px;
`;

export const ContainerValueText = styled.Text`
  font-size: 100px;
  color: #000000;
`;
