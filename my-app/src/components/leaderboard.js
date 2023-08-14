import React, { useState, useEffect } from 'react'; // Don't forget to import React and other necessary dependencies
import './game.css';
import 'firebase/database'; 
import { db } from './firestore';
import { collection, query, getDocs } from "firebase/firestore";

export default function Leaderboard() 
{
    const [leaderboardData, setLeaderboardData] = useState([]);

    useEffect(() => {
        async function fetchLeaderboardData() {
            const q = query(collection(db, "gameResults"));
            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs.map(doc => doc.data());
            setLeaderboardData(data);
        }

        fetchLeaderboardData();
    }, []);

    return (
        <div className='back'>
            <div className='table1'>
                <table className='table1'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Score (You/Computer)</th>
                            <th>Result</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.playerName}</td>
                                <td>{row.playerScore}/{row.computerScore}</td>
                                <td>{row.result}</td>
                                <td>{row.timestamp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
