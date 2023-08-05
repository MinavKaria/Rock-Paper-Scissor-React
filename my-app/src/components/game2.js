import React, { useState } from 'react';
import './game.css';

const choices = ['rock', 'paper', 'scissors'];

const RPSGame = () => {
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
    if ((player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')) 
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
        <p>Player's choice: {playerChoice}</p>
        </div>
        <div className='computerchoice'>
        <p>Computer's choice: {computerChoice}</p>
        </div>
        
        </div>
        <p>{result}</p>
        
        {playerScore === 5 || computerScore === 5 ? (
          <div>
            <h2>{playerScore === 5 ? 'Player' : 'Computer'} wins!</h2>
            <button onClick={handleRestart}>Start Again</button>
          </div>
          
        ) : (
          <div>
            {choices.map(choice => (<button key={choice} onClick={() => handlePlayerChoice(choice)}>
                {choice}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RPSGame;
