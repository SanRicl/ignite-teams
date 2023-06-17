import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";

import { groupsGetAll } from "./groupsGetAll";

export const groupRemoveByName = async (groupToBeDeleted: string) => {
  try {
    const storedGroups = await groupsGetAll();

    const group = storedGroups.filter((group) => group !== groupToBeDeleted);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(group));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupToBeDeleted}`);
  } catch (error) {
    throw error;
  }
};
