import React, { useState } from 'react';
import './game.css';
import { initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import Card from './card';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Icon from './icon';
import firebase from "firebase/app";
import 'firebase/database'; 
import { db } from './firestore';

const firebaseConfig = {
  apiKey: "AIzaSyArARFQe9OlVd4F0oyjY-EPUUO38sesUac",
  authDomain: "rock-paper-scissor-171cc.firebaseapp.com",
  databaseURL: "https://rock-paper-scissor-171cc-default-rtdb.firebaseio.com",
  projectId: "rock-paper-scissor-171cc",
  storageBucket: "rock-paper-scissor-171cc.appspot.com",
  messagingSenderId: "155558235436",
  appId: "1:155558235436:web:d132d18e80a1c77a1d3089",
  measurementId: "G-B1ZGGF0DZT"
};




const app = initializeApp(firebaseConfig);
const choices = ['Rock', 'Paper', 'Scissors'];


const RPSGame = () => {

  const [playerName, setPlayerName] = useState();
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  
  const [gameData, setGameData] = useState({
    playerName: '',
    playerScore: 0,
    computerScore: 0,
    result: '',
    timestamp: '',
  });

  const getRandomChoice = () => {

    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };
  
  const determineWinner = (player, computer) => {

    if (player === computer) return 'It\'s a tie!';
    if ((player === 'Rock' && computer === 'Scissors') ||(player === 'Scissors' && computer === 'Paper') ||(player === 'Paper' && computer === 'Rock')) 
        {
            setPlayerScore(prevScore => prevScore + 1);
            return 'Player wins!';
        } 
    else 
    {
      setComputerScore(prevScore => prevScore + 1);
      return 'Computer wins!';
    }
  };
  
  const handlePlayerChoice = async (choice) => {
    const computerChoice = getRandomChoice();
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    const result = await determineWinner(choice, computerChoice);
    setResult(result);
  
    if (playerScore === 5 || computerScore === 5) {
      // Add the game result to the database
      const Data = {
        playerName,
        playerScore,
        computerScore,
        result,
        timestamp: new Date().toISOString(),
      };
      setGameData(Data);
      await uploadDB();
    }
  };

  const uploadDB = async ()=> { 
    console.log(gameData);
        try {
            const docRef = await addDoc(collection(db, "gameResults"), {
              playerName: gameData.playerName,    
              playerScore: gameData.playerScore,
              computerScore: gameData.computerScore,
              result: gameData.result,
              timestamp: gameData.timestamp
            });
            console.log("Document written with ID: ", docRef.id);
          } 
          catch (e) {
            console.error("Error adding document: ", e);
          }
  }
  const handleRestart = () => {

    setPlayerScore(0);
    setComputerScore(0);
    setPlayerChoice('');
    setComputerChoice('');
    setResult('');
    setPlayerName('');
  };
  
  const setName = (e) => {
    setPlayerName(e.target.value);
    const Data = {
      playerName:e.target.value,
      playerScore,
      computerScore,
      result,
      timestamp: new Date().toISOString(),

      
    };
    setGameData(Data);
    console.log(e.target.value);
    
  }



  
 

  return (
    <div>
      <div>
      
       <div className='pointtable'>
        <table className='table2 '>   
        <tr>
            <th>Player</th>
            
        </tr>
        <tr>
          <td>{playerScore}</td>
        </tr>
        </table>
        <table className='table2'>
        <tr>
            <th>Computer</th>
        </tr>
        <tr>
           <td>{computerScore}</td>
        </tr>
        
        </table>
        </div>
       <div className='choice'>
        <div className='playerchoice'>
        <Card name={playerChoice}></Card>
        </div>
        <div className='computerchoice'>
        <Card name={computerChoice}></Card>
        </div>
        
        </div>
        <div className='roundresult'>
        <p>{result}</p>
        </div>
        {playerScore === 5 || computerScore === 5 ?
         (
          <div className='finalscore'>
            <div className='name m-3'>
              <input
                type="text"
                placeholder="Enter your name (Click Start Again)"
                value={playerName}
                onChange={setName}
                className='w-25'
              />
            </div>


            <div>
            <h2 className='finalresult'>{playerScore === 5 ? 'Player' : 'Computer'} wins!</h2>
            </div>

            <div className='scores'>
            <h1>{playerScore}/</h1> 
            
            <h1>{computerScore}</h1>
            </div>
            <div className='startagain'>

            <button className='btn btn-danger' onClick={()=>{
              
            
             const Data = {
              playerName,
              playerScore,
              computerScore,
              result,
              timestamp: new Date().toISOString(),

              
            };
            setGameData(Data);
            uploadDB()
            handleRestart()
          }} >Start Again</button>
            </div>
          

          </div>
        ) :
         (
          <div className='buttons'>
            {choices.map(choice => (<button className="btn btn-danger" key={choice} onClick={() => handlePlayerChoice(choice)}>{choice}</button>))}
            
          </div>
           
           
         
        )}
      </div>
     
    </div>
  );
};

export default RPSGame;