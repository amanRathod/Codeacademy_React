import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';

const images = [];

for(const animal in animals){
  images.push(<img
    key={animal}
    className='animal'
    alt={animal}
    src={animals[animal].image}
    ariaLabel={animal}
    role='button'
    onClick={displayFact}
    />
  )
}

function displayFact(e){
  const animalFacts = animals[e.target.alt].facts;
  const randomFactsIndex = Math.floor(Math.random()*animalFacts.length)
  document.getElementById('fact').innerHTML = animalFacts[randomFactsIndex]
}

let showBackground = true;

const background = <img 
                      className='background'
                      alt='ocean'
                      src='/images/ocean.jpg'
                       />


const animalFacts =  (
  <div>
    <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
    {(showBackground) && background}
    <div className='animals'>{images}</div>
    <p id='fact'>

    </p>
  </div>
  );
  
ReactDOM.render(animalFacts, document.getElementById('root'))
