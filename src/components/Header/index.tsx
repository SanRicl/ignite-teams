import React from "react";
import { BackButton, BackIcon, Container, Logo } from "./styles";
import logoImg from "@assets/logo.png";
import { useNavigation } from "@react-navigation/native";

interface IProps {
  showBackButton?: boolean;
}
const Header = ({ showBackButton = false }: IProps) => {
  const navigation = useNavigation();

  const handleGoback = () => {
    navigation.navigate("groups");
  };

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoback}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
};

export default Header;
