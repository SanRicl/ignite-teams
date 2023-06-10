import React, { useState, useCallback } from "react";
import { Container } from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import GroupCard from "@components/GroupCard";
import { FlatList } from "react-native";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { groupsGetAll } from "@storage/group/groupsGetAll";

const Groups = () => {
  const [group, setGroup] = useState<string[]>([]);

  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate("new");
  };

  const fetchGroups = async () => {
    try {
      const data = await groupsGetAll();
      setGroup(data);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={group}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={group.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
        showsVerticalScrollIndicator={false}
      />
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
};

export default Groups;
