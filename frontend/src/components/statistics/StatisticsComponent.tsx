import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebaseConfig';
import { doc, onSnapshot, collection, getDocs } from 'firebase/firestore'; // Import updateDoc and increment
import styled from 'styled-components';
import { TextStyle } from '../styled/Text';
import { achievements } from '../../setup/Achievements';
import { updateDatabase } from './firestore';
import { PlayerData } from './PlayerData';
import CharacterDisplayComponent from './CharacterDisplayComponent';

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

const StatisticsContainer = styled.div`
display: flex;
flex-direction: column;
`

const GameStat = styled(TextStyle)`
`

const StatisticsComponent: React.FC = () => {
  const [statistics, setStatistics] = useState<Statistics | null>(null);
  const [completes, setCompletes] = useState<PlayerData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const docRef = doc(firestore, 'game', 'statistics');

    const subscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setStatistics(docSnap.data() as Statistics);
      } else {
        console.log('No such document!');
      }
      setLoading(false);
    }, (err) => {
      console.error('Error fetching document:', err);
      setError('Error fetching document');
    });

    return () => {
      subscribe(); // Unsubscribe from snapshot listener when component unmounts
    };
  }, []);

  useEffect(() => {
    const fetchCompletedGames = async () => {
      try {
        const completedCollection = collection(firestore, 'completed');
        const completedSnapshot = await getDocs(completedCollection);
        const completedList = completedSnapshot.docs.map(doc => doc.data() as PlayerData);
        setCompletes(completedList);
      } catch (err) {
        console.error('Error fetching completed games:', err);
        setError('Error fetching completed games');
      }
    };

    fetchCompletedGames();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  
  return (
    <>
    <StatisticsContainer>
        <h1>Game Statistics</h1>
        {statistics ? (
            <div>
                <GameStat>{achievements['gamesStarted'].name}: {statistics.gamesStarted}</GameStat>
                <GameStat>{achievements['gamesCompleted'].name}: {statistics.gamesCompleted}</GameStat>
                <GameStat>{achievements['chooseArtist'].name}: {statistics.chooseArtist}</GameStat>
                <GameStat>{achievements['chooseDoctor'].name}: {statistics.chooseDoctor}</GameStat>
                <GameStat>{achievements['chooseMechanic'].name}: {statistics.chooseMechanic}</GameStat>
                <GameStat>{achievements['achievementShangrila'].name}: {statistics.achievementShangrila}</GameStat>
                <GameStat>{achievements['achievementParadox'].name}: {statistics.achievementParadox}</GameStat>
                <GameStat>{achievements['achievementNature'].name}: {statistics.achievementNature}</GameStat>
                <GameStat>{achievements['achievementWords'].name}: {statistics.achievementWords}</GameStat>
                <GameStat>{achievements['achievementFolding'].name}: {statistics.achievementFolding}</GameStat>
                <GameStat>{achievements['achievementCrafting'].name}: {statistics.achievementCrafting}</GameStat>
                <GameStat>{achievements['achievementFeminine'].name}: {statistics.achievementFeminine}</GameStat>
                <GameStat>{achievements['achievementMyths'].name}: {statistics.achievementMyths}</GameStat>
                <GameStat>{achievements['endingSheep'].name}: {statistics.endingSheep}</GameStat>
                <GameStat>{achievements['endingForget'].name}: {statistics.endingForget}</GameStat>
                <GameStat>{achievements['endingTravel'].name}: {statistics.endingTravel}</GameStat>
                <GameStat>{achievements['endingMemory'].name}: {statistics.endingMemory}</GameStat>
                <GameStat>{achievements['endingWake'].name}: {statistics.endingWake}</GameStat>
                <div>
                    <button onClick={() => {updateDatabase('gamesStarted')}}>Increment Games Started</button>
                </div>
                <div>
                    <button onClick={() => {updateDatabase('gamesCompleted')}}>Increment Games Completed</button>
                </div>
            </div>
        ) : (
            <p>No statistics available</p>
        )}

        <h2>Game Completes</h2>
        {completes.length > 0 &&
        <>
          {completes.map((player)=>(
            <>
              <CharacterDisplayComponent player={player}/>
            </>
          ))}
        </>
        }
    </StatisticsContainer>
    </>
  );
};

export default StatisticsComponent;
