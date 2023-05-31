import React from "react";
import { Container, SubTitle, Title } from "./style";

type IProps = {
  title: string;
  subtitle: string;
};

const Highlight = ({ subtitle, title }: IProps) => {
  return (
    <Container>
      <Title>{title}</Title>

      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
};

export default Highlight;
