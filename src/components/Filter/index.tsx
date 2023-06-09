import React from "react";
import { Container, Title, FilterStyleProps } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

const Filter = ({ title, isActive = false, ...rest }: Props) => {
  return (
    <Container {...rest} isActive={isActive}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Filter;
