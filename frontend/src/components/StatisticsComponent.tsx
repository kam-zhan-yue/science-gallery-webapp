import React, { useState, useEffect } from 'react';
import { firestore } from '../firebaseConfig';
import { doc, onSnapshot, updateDoc, increment } from 'firebase/firestore'; // Import updateDoc and increment
import styled from 'styled-components';

interface Statistics {
  // Define the structure of your statistics document here
  gamesStarted: number;
  gamesCompleted: number;
  [key: string]: any; // for additional dynamic fields
}

const StatisticsContainer = styled.div`
display: flex;
flex-direction: column;
`

const StatisticsComponent: React.FC = () => {
  const [statistics, setStatistics] = useState<Statistics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const docRef = doc(firestore, 'game', 'statistics');

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
        console.log('on snapshot')
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
      unsubscribe(); // Unsubscribe from snapshot listener when component unmounts
    };
  }, []);

  const incrementGamesStarted = async () => {
    try {
      await updateDoc(doc(firestore, 'game', 'statistics'), {
        gamesStarted: increment(1) // Increment gamesStarted by 1
      });
    } catch (err) {
      console.error('Error incrementing games started:', err);
    }
  };

  const incrementGamesCompleted = async () => {
    try {
      await updateDoc(doc(firestore, 'game', 'statistics'), {
        gamesCompleted: increment(1) // Increment gamesCompleted by 1
      });
    } catch (err) {
      console.error('Error incrementing games completed:', err);
    }
  };

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
                <p>Games Started: {statistics.gamesStarted}</p>
                <p>Games Completed: {statistics.gamesCompleted}</p>
                <div>
                    <button onClick={incrementGamesStarted}>Increment Games Started</button>
                </div>
                <div>
                    <button onClick={incrementGamesCompleted}>Increment Games Completed</button>
                </div>
            </div>
        ) : (
            <p>No statistics available</p>
        )}
    </StatisticsContainer>
    </>
  );
};

export default StatisticsComponent;
