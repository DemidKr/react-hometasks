import Dice from "react-dice-roll";
import {TValue} from "react-dice-roll/dist/_types";
import {useState} from "react";

export const HomeWork1 = () => {
  const [value, setValue] = useState<TValue>(6);

  const handleRoll = (value: TValue) => {
    setValue(value);
  };

  return <div className="centered-container">
    <Dice defaultValue={value} onRoll={handleRoll} />
  </div>
};
