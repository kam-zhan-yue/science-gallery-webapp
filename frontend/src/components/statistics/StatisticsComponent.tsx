import React, { useState, useEffect } from "react";
import { firestore } from "../../firebaseConfig";
import { doc, onSnapshot, collection, getDocs } from "firebase/firestore"; // Import updateDoc and increment
import styled from "styled-components";
import { TextStyle } from "../styled/Text";
import { achievements } from "../../setup/Achievements";
import { PlayerData } from "./PlayerData";
import CharacterDisplayComponent from "./CharacterDisplayComponent";

interface Statistics {
  // Define the structure of your statistics document here
  gamesStarted: number;
  gamesCompleted: number;
  chooseArtist: number;
  chooseDoctor: number;
  chooseMechanic: number;
  achievementShangrila: number;
  achievementParadox: number;
  achievementNature: number;
  achievementWords: number;
  achievementFolding: number;
  achievementCrafting: number;
  achievementFeminine: number;
  achievementMyths: number;
  endingSheep: number;
  endingForget: number;
  endingTravel: number;
  endingMemory: number;
  endingWake: number;
}

const StatisticsHeader = styled(TextStyle)`
  font-size: 28px;
  text-align: center;
  align-items: center;
`;

const GameStat = styled(TextStyle)`
  text-align: left;
  font-size: 16px;
`;

const StatisticsComponent: React.FC = () => {
  const [statistics, setStatistics] = useState<Statistics | null>(null);
  const [completes, setCompletes] = useState<PlayerData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const statisticsDoc = doc(firestore, "game", "statistics");

    const subsribeStatistics = onSnapshot(
      statisticsDoc,
      (docSnap) => {
        if (docSnap.exists()) {
          setStatistics(docSnap.data() as Statistics);
        } else {
          console.log("No such document!");
        }
        setLoading(false);
      },
      (err) => {
        console.error("Error fetching document:", err);
        setError("Error fetching document");
      },
    );

    return () => {
      subsribeStatistics(); // Unsubscribe from snapshot listener when component unmounts
    };
  }, []);

  useEffect(() => {
    const fetchCompletedGames = async () => {
      try {
        const completedCollection = collection(firestore, "completed");
        const completedSnapshot = await getDocs(completedCollection);
        const completedList = completedSnapshot.docs.map(
          (doc) => ({ ...doc.data(), id: doc.id }) as PlayerData,
        );
        setCompletes(completedList);
      } catch (err) {
        console.error("Error fetching completed games:", err);
        setError("Error fetching completed games");
      }
    };

    const subscribeToCompletedGames = () => {
      const completedCollection = collection(firestore, "completed");

      return onSnapshot(
        completedCollection,
        (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
              const newGame = {
                ...change.doc.data(),
                id: change.doc.id,
              } as PlayerData;
              setCompletes((prevCompletes) => {
                const isExisting = prevCompletes.some(
                  (game) => game.id === newGame.id,
                );
                if (!isExisting) {
                  console.log("New document added: ", newGame);
                  return [...prevCompletes, newGame];
                }
                return prevCompletes;
              });
            }
          });
        },
        (err) => {
          console.error("Error fetching completed games:", err);
          setError("Error fetching completed games");
        },
      );
    };

    fetchCompletedGames();
    const unsubscribeCompletedGames = subscribeToCompletedGames();

    return () => {
      unsubscribeCompletedGames(); // Unsubscribe from snapshot listener when component unmounts
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="flex justify w-full h-4/5 flex-col justify-items-center items-center">
        <StatisticsHeader>Game Statistics</StatisticsHeader>
        {statistics ? (
          <div className="columns-2">
            <GameStat>
              {achievements["gamesStarted"].name}: {statistics.gamesStarted}
            </GameStat>
            <GameStat>
              {achievements["gamesCompleted"].name}: {statistics.gamesCompleted}
            </GameStat>
            <GameStat>
              {achievements["chooseArtist"].name}: {statistics.chooseArtist}
            </GameStat>
            <GameStat>
              {achievements["chooseDoctor"].name}: {statistics.chooseDoctor}
            </GameStat>
            <GameStat>
              {achievements["chooseMechanic"].name}: {statistics.chooseMechanic}
            </GameStat>
            <GameStat>
              {achievements["achievementShangrila"].name}:{" "}
              {statistics.achievementShangrila}
            </GameStat>
            <GameStat>
              {achievements["achievementParadox"].name}:{" "}
              {statistics.achievementParadox}
            </GameStat>
            <GameStat>
              {achievements["achievementNature"].name}:{" "}
              {statistics.achievementNature}
            </GameStat>
            <GameStat>
              {achievements["achievementWords"].name}:{" "}
              {statistics.achievementWords}
            </GameStat>
            <GameStat>
              {achievements["achievementFolding"].name}:{" "}
              {statistics.achievementFolding}
            </GameStat>
            <GameStat>
              {achievements["achievementCrafting"].name}:{" "}
              {statistics.achievementCrafting}
            </GameStat>
            <GameStat>
              {achievements["achievementFeminine"].name}:{" "}
              {statistics.achievementFeminine}
            </GameStat>
            <GameStat>
              {achievements["achievementMyths"].name}:{" "}
              {statistics.achievementMyths}
            </GameStat>
            <GameStat>
              {achievements["endingSheep"].name}: {statistics.endingSheep}
            </GameStat>
            <GameStat>
              {achievements["endingForget"].name}: {statistics.endingForget}
            </GameStat>
            <GameStat>
              {achievements["endingTravel"].name}: {statistics.endingTravel}
            </GameStat>
            <GameStat>
              {achievements["endingMemory"].name}: {statistics.endingMemory}
            </GameStat>
            <GameStat>
              {achievements["endingWake"].name}: {statistics.endingWake}
            </GameStat>
          </div>
        ) : (
          <p>No statistics available</p>
        )}

        <div className="mt-2 w-full flex justify-center items-center gap-2 overflow-hidden">
          {completes.length > 0 && (
            <>
              {completes.map((player) => (
                <CharacterDisplayComponent key={player.id} player={player} />
              ))}
            </>
          )}
          {completes.length > 0 && (
            <>
              {completes.map((player) => (
                <CharacterDisplayComponent key={player.id} player={player} />
              ))}
            </>
          )}
          {completes.length > 0 && (
            <>
              {completes.map((player) => (
                <CharacterDisplayComponent key={player.id} player={player} />
              ))}
            </>
          )}
          {completes.length > 0 && (
            <>
              {completes.map((player) => (
                <CharacterDisplayComponent key={player.id} player={player} />
              ))}
            </>
          )}
          {completes.length > 0 && (
            <>
              {completes.map((player) => (
                <CharacterDisplayComponent key={player.id} player={player} />
              ))}
            </>
          )}
          {completes.length > 0 && (
            <>
              {completes.map((player) => (
                <CharacterDisplayComponent key={player.id} player={player} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default StatisticsComponent;
