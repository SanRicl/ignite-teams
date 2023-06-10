import { Platform } from "react-native";
import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 50px;
  height: 60px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))`
  margin-top: ${Platform.OS === "ios" ? "35px" : "0px"};
`;
