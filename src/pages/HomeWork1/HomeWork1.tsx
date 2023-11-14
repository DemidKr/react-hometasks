import React, {useState} from "react";

function randomIntFromInterval(min: number, max: number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const dices = (diceNumber: number) => {
  switch (diceNumber) {
    case 1:
      return (
          <div className='center-wrapper'>
            <div className="dice"/>
          </div>
      )
    case 2:
      return (
          <div className='column-wrapper'>
            <div className="dice"/>
            <div className="dice"/>
          </div>
      )
    case 3:
      return (
          <div className='column-wrapper'>
            <div className="dice"/>
            <div className="dice"/>
            <div className="dice"/>
          </div>
      )
    case 4:
      return (
          <div className='column-wrapper'>
            <div className="row">
              <div className="dice"/>
              <div className="dice"/>
            </div>
            <div className="row">
              <div className="dice"/>
              <div className="dice"/>
            </div>
          </div>
      )
    case 5:
      return (
          <div className='column-wrapper'>
            <div className="row">
              <div className="dice"/>
              <div className="dice"/>
            </div>
            <div className="dice"></div>
            <div className="row">
              <div className="dice"/>
              <div className="dice"/>
            </div>
          </div>
      )
    case 6:
      return (
          <div className='column-wrapper'>
            <div className="row">
              <div className="dice"/>
              <div className="dice"/>
            </div>
            <div className="row">
              <div className="dice"/>
              <div className="dice"/>
            </div>
            <div className="row">
              <div className="dice"/>
              <div className="dice"/>
            </div>
          </div>
      )
  }
}

export const HomeWork1 = () => {
  const [value, setValue] = useState(6);
  const [isShaking, setIsShaking] = useState(true)

  const handleRoll = () => {
      // random number from 1 to 6
      const newValue = randomIntFromInterval(1, 6)
      setIsShaking(true)
      setValue(newValue)
  };

  return <div className="centered-container">
      <h2>Нажми на меня!</h2>
    <div
        onClick={handleRoll}
        onAnimationEnd={() => setIsShaking(false)}
        className={isShaking ? "dice-container shaking" : "dice-container"}
    >
      {dices(value)}
    </div>
  </div>
};
