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
  // Extract the necessary data from the player object
  const playerData: Omit<PlayerData, "id"> = {
    name: player.name, // Assuming Player has a 'name' property
    class: player.class, // Assuming Player has a 'class' property
    ending: ending,
    items: player.inventory, // Assuming Player has an 'items' property
  };

  // Call the function to add the player data to Firestore
  await addPlayerData(playerData);
}

// Function to add a document with auto-generated ID to Firestore
const addPlayerData = async (playerData: Omit<PlayerData, "id">) => {
  try {
    const playerCollection = collection(firestore, "completed");
    const docRef = await addDoc(playerCollection, playerData);
    console.log("Player data successfully added with ID:", docRef.id);
  } catch (err) {
    console.error("Error adding player data:", err);
  }
};
