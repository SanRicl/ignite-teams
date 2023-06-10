import React, { useState } from "react";
import { Container, Content, Icon } from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";

const NewGroup = () => {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  const handleNew = async () => {
    try {
      await groupCreate(group);
    } catch (error) {
      console.log(error);
    }
    navigation.navigate("players", { group });
  };

  return (
    <Container>
      <Header showBackButton />

      <Content behavior="padding">
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoass"
        />
        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  );
};

export default NewGroup;
