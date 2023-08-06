import logo from './logo.svg';
import './App.css';
import Card from './components/card.js';
import { useEffect} from 'react';
import Button from './components/button';
import Game from './components/game.js';
import Leaderboard from './components/leaderboard.js';
import React, { useState } from 'react';





const Leaderboard1 = () => (
 <Leaderboard></Leaderboard>
);

const Game1 = () => (
  <Game></Game>
 );


    
 const App = () => {

  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };
  
 
  
  return (
    
    
    
    <div className='whole'>

      

  
    <h1 className='title'>Rock Paper Scissor</h1>

    <nav className='navigate'>
      <button className='btn third' onClick={() => handleNavigation('home')}>Play Game</button>
      <button className='btn third' onClick={() => handleNavigation('leaderboard')}>Check Leaderboard</button>
      
    </nav>
    {currentPage === 'home' && <Game1 />}
    {currentPage === 'leaderboard' && <Leaderboard1 />}


    
  
    
    
  




    </div>
    
  );
  

}

export default App;
