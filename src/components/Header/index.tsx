import React from "react";
import { BackButton, BackIcon, Container, Logo } from "./styles";
import logoImg from "@assets/logo.png";

interface IProps {
  showBackButton?: boolean;
}
const Header = ({ showBackButton = false }: IProps) => {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
};

export default Header;
