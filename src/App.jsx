import Die from "./die";
import { useState } from "react";
import Confetti from "react-confetti"


export default function App() {
  const [dice, setDice] = useState(()=>allNewDice());


  const gameWon = dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)

  function allNewDice() {
    return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6), 
                isHeld: false
            }))
  }

  const diceElements = dice.map((dieObj ,index) =>  <Die key = {index}  value={dieObj.value} id = {index} hold = {holdDie} isHeld = {dieObj.isHeld} />);

  function holdDie(index) {
    setDice(oldDice => oldDice.map((die, i) => 
      i === index ? { ...die, isHeld: !die.isHeld } : die
    ));
  }

  function rollDice()
  {
    if (!gameWon) {
      setDice(oldDice => oldDice.map(die => {
          if (die.isHeld) {
              return die;
          } else {
              return { ...die, value: Math.ceil(Math.random() * 6) };
          }
      }));
  } else {
      setDice(allNewDice())
  }
  }


  return (
    <main>
      {gameWon && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements }
      </div>
      <button className="roll-dice" onClick={rollDice}>{gameWon ? "New Game" : "Roll Dice"}</button>
    </main>
  );
}
