import { useState, useEffect } from 'react';
import './App.css';
import cards from './cards';

// got the card back from this link
// https://www.freepik.com/free-vector/hand-drawn-mystical-tarot-mobile-wallpaper_21862422.htm#query=tarot%20cards&position=5&from_view=keyword
import card_back from './img/cardback.jpg';
// got the app background from this link
// https://www.pinterest.com/pin/dump-of-images-that-could-be-used-as-phone-wallpapers-36--775463629566722000/
import starry_background from './img/starrybackground.jpg';

function App() {
  // interface for typings
  interface Card {
    name: string,
    tag: string,
    meaning: string,
    card_face: any,
  }

  // state variable to store selected cards
  const [spread, setSpread] = useState<Array<Card>>();
  // state variable to track single card to display
  const [single, setSingle] = useState<Card>();
  // state variable to track modal open and close
  const [modal, setModal] = useState<Boolean>(false);

  // random number generator
  // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  function randomIntFromInterval(): number {
    return Math.floor(Math.random() * (44));
  }

  // shuffle cards array for more randomization
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffleArray(array: Array<Object>): void {
    for (let i: number = array.length - 1; i > 0; i--) {
      let j: number = Math.floor(Math.random() * (i + 1));
      let temp: Object = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  // function to randomly choose cards which will be stored in state variable
  function selectCards(): void {
    let set: Set<number> = new Set();
    // if card was already chosen, choose another card
    while (set.size !== 3) {
      set.add(randomIntFromInterval());
    }
    // convert the Set into an Array to map over it
    let temp: Array<number> = Array.from(set);
    // array to store card objects
    let spread: Array<Card> = [];
    // push selected cards using the temp array to spread array
    temp.forEach((element) => {
      spread.push(cards[element]);
    });
    // set state variable to spread array
    setSpread(spread);
  }

  // function to display card meaning
  function reading(): void {
    setModal(true);
  }

  // useEffect to "shuffle deck" whenever cards are chosen to have more randomization
  useEffect(() => {
    shuffleArray(cards);
  }, [spread]);

  return (
    <div className="container">
      <div onClick={selectCards} className="fanContainer">
        <img src={card_back} alt="card back" className="cardBack" />
        <img src={card_back} alt="card back" className="cardBack" />
        <img src={card_back} alt="card back" className="cardBack" />
      </div>
      {spread && (
        <div>
          hello world
        </div>
      )}
    </div>
  );
}

export default App;