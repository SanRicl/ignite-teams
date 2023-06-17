import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playerGetByGroup } from "./playerGetByGroup";

export const playerGetByGroupAndTeam = async (
  group: string,
  team: string
): Promise<PlayerStorageDTO[]> => {
  try {
    const storage = await playerGetByGroup(group);
    const players = storage.filter((p) => p.team === team);

    return players;
  } catch (error) {
    throw error;
  }
};
