import {
  collection,
  doc,
  updateDoc,
  increment,
  addDoc,
} from "firebase/firestore";
import { firestore } from "../../firebaseConfig"; // Adjust the import as necessary
import Player from "../../classes/Player";
import { PlayerData } from "./PlayerData";

export const updateDatabase = async (
  key: string,
  incrementValue: number = 1,
) => {
  try {
    await updateDoc(doc(firestore, "game", "statistics"), {
      [key]: increment(incrementValue),
    });
  } catch (err) {
    console.error(`Error incrementing ${key}:`, err);
  }
};

export async function reportComplete(player: Player, ending: string) {
  if (!player) return;
  if (player.class === '') return;
  if (ending === '') return;


  const playerData: Omit<PlayerData, "id"> = {
    name: player.name,
    class: player.class,
    ending: ending,
    items: player.inventory,
  };

  await addPlayerData(playerData);
}

const addPlayerData = async (playerData: Omit<PlayerData, "id">) => {
  try {
    const playerCollection = collection(firestore, "completed");
    const docRef = await addDoc(playerCollection, playerData);
    console.log("Player data successfully added with ID:", docRef.id);
  } catch (err) {
    console.error("Error adding player data:", err);
  }
};
