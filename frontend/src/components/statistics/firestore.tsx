import { doc, updateDoc, increment } from 'firebase/firestore';
import { firestore } from '../../firebaseConfig'; // Adjust the import as necessary

export const updateDatabase = async (key: string, incrementValue: number = 1) => {
  try {
    await updateDoc(doc(firestore, 'game', 'statistics'), {
      [key]: increment(incrementValue)
    });
  } catch (err) {
    console.error(`Error incrementing ${key}:`, err);
  }
};