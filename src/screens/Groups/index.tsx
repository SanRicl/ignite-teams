import React from "react";
import { Container } from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import GroupCard from "@components/GroupCard";

const Groups = () => {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      <GroupCard title="Galera do Ignite" />
    </Container>
  );
};

export default Groups;
