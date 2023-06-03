import React from "react";
import { Container, Content, Icon } from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";

const NewGroup = () => {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoass"
        />
        <Input placeholder="Nome da turma"/>
        <Button title="Criar" style={{marginTop: 20}}/>
      </Content>
    </Container>
  );
};

export default NewGroup;
