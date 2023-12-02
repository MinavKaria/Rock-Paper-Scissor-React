// Leaderboard.js
import React, { useState, useEffect } from 'react';
import './game.css';
import { db } from './firestore.js';
import { collection, query, getDocs } from "firebase/firestore";

export default function Leaderboard() {
    const [leaderboardData, setLeaderboardData] = useState([]);

    useEffect(() => {
        async function fetchLeaderboardData() {
            const q = query(collection(db, "MyResults"));
            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs
                .map(doc => doc.data())
                .filter(row => row.playerName && row.playerScore && row.computerScore && row.result && row.timestamp);
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
                            <th>Index</th>
                            <th>Name</th>
                            <th>Score (You/Computer)</th>
                            <th>Result</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardData.map(({playerName,playerScore,result,computerScore,timestamp}, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{playerName}</td>
                                <td>{playerScore}/{computerScore}</td>
                                <td>{result}</td>
                                <td>{timestamp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
