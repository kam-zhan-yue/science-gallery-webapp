import React, {useState, useEffect} from 'react';
import { firestore } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

interface Statistics {
    // Define the structure of your statistics document here
    gamesStarted: number;
    gamesCompleted: number;
    [key: string]: any; // for additional dynamic fields
  }

const StatisticsComponent: React.FC = () => {
    const [statistics, setStatistics] = useState<Statistics | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {   
        const fetchStatistics = async () => {
        try {
            const docRef = doc(firestore, 'game', 'statistics');
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
            setStatistics(docSnap.data() as Statistics);
            } else {
            console.log('No such document!');
            }
        } catch (err) {
            console.error('Error getting document:', err);
            setError('Error getting document');
        } finally {
            setLoading(false);
        }
        };

        fetchStatistics();
    }, []);

    if(loading) {
        return <div>Loading...</div>
    }

    if(error) {
        return <div>{error}</div>
    }

    return (
        <>
        <h1>Game Statistics</h1>
            {statistics ? (
            <div>
                <p>Games Started: {statistics.gamesStarted}</p>
                <p>Games Completed: {statistics.gamesCompleted}</p>
            </div>
            ) : (
            <p>No statistics available</p>
            )}
        </>
    );
};

export default StatisticsComponent;
