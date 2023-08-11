import React, { useState } from 'react';
import './game.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import Card from './card';

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





const choices = ['rock', 'paper', 'scissors'];


const RPSGame = () => {

  const[user,setUser]= useState({
    name:'',
    score:"",
    result:'',
    time:'12:00',
  }


  
  );

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  
  const getRandomChoice = () => {

    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };
  
  const determineWinner = (player, computer) => {

    if (player === computer) return 'It\'s a tie!';
    if ((player === 'rock' && computer === 'scissors') ||(player === 'scissors' && computer === 'paper') ||(player === 'paper' && computer === 'rock')) 
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
  
  const handlePlayerChoice = (choice) => {
    const computerChoice = getRandomChoice();
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    const result = determineWinner(choice, computerChoice);
    setResult(result);
  };
  
  const handleRestart = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setPlayerChoice('');
    setComputerChoice('');
    setResult('');
  };
  
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
            
            <div>
            <h2 className='finalresult'>{playerScore === 5 ? 'Player' : 'Computer'} wins!</h2>
            </div>

            <div className='scores'>
            <h1>{playerScore}/</h1> 
            
            <h1>{computerScore}</h1>
            </div>
            <div className='startagain'>
            <button onClick={handleRestart} >Start Again</button>
            </div>
          

          </div>
        
          
          

        ) :
         (
          <div className='buttons'>
            {choices.map(choice => (<button key={choice} onClick={() => handlePlayerChoice(choice)}>{choice}</button>))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RPSGame;
