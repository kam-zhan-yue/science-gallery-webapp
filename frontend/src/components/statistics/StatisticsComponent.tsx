import React, { useState, useEffect } from "react";
import { firestore } from "../../firebaseConfig";
import { doc, onSnapshot, collection, getDocs } from "firebase/firestore"; // Import updateDoc and increment
import styled from "styled-components";
import { TextStyle } from "../styled/Text";
import { PlayerData } from "./PlayerData";
import { Statistics } from "./Statistics";
import GameStatsComponent from "./GameStatsComponent";
import GameCompleteComponent from "./GameCompleteComponent";
import CompleteNotificationComponent from "./CompleteNotificationComponent";
import { EventBus } from "../../EventBus";

const Overlay = styled.div`
  position: fixed;
  top: 20px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;

  -webkit-transition: all 0.2s;
  transition: all 0.2s;
`;

const StatisticsHeader = styled(TextStyle)`
  font-size: 28px;
  text-align: center;
  align-items: center;
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
                  EventBus.emit("game_complete", newGame);
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
    <div className='fixed top-20 bottom-32 w-full justify-center items-center pr-5 pl-5'>
      <div className='flex w-full h-full flex-col items-center'>
        <div className='flex justify-items-center items-center'>
          <StatisticsHeader>Game Statistics</StatisticsHeader>
        </div>
          <div className="flex justify w-full h-full flex-row justify-items-center items-center text-center">
          <div className='w-1/3 h-full bg-gray-500'>
            <GameCompleteComponent completes={completes} />
          </div>
          <div className='w-2/3 h-full'>
          {statistics ? (
              <GameStatsComponent statistics={statistics} />
            ) : (
              <p>No statistics available</p>
            )}
          </div>
          </div>
      </div>
    </div>
      <CompleteNotificationComponent />
    </>
  );
};

export default StatisticsComponent;
