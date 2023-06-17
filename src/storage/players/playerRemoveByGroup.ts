import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION, GROUP_COLLECTION } from "@storage/storageConfig";
import { playerGetByGroup } from "./playerGetByGroup";

export const playerRemoveByGroup = async (
  playerName: string,
  group: string
) => {
  try {
    const storage = await playerGetByGroup(group);

    const filtered = storage.filter((item) => item.name !== playerName);

    const players = JSON.stringify(filtered);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players);
  } catch (error) {
    throw error;
  }
};
