import { useState } from "react";

const Display = props => <div>{props.value}</div>


const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>The app is used by pressing the buttons</div>;
  }
  return <div>Button pressed history: {props.allClicks.join(" ")}</div>;
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    console.log("value now: ", newValue);
    setValue(newValue);
  };

  
  return (
    <div>
      <Display value={value} />
      <Button onClick={() => setToValue(1000)} text="Thousand" />
      <Button onClick={() => setToValue(0)} text="reset" />
      <Button onClick={() => setToValue(value + 1)} text="inc" />
    </div>
  );
};

export default App;
