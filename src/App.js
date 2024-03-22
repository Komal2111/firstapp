import logo from "./logo.svg";
import "./App.css";
import React, {useState} from 'react';

function App() {

  const [Weight, setWeight] = useState(0);
  const [Height, setHeight] = useState(0);

  const [bmi, setbmi] = useState(' ');
  const [message, setmessage] = useState(" ");
  // const [reload, setreload] = useState(' ');

  let CalculateBmi = (e) => {
    e.preventDefault();
    if(Weight === 0 || Height === 0){
      alert("Enter vaild weight and height");

    }else {
      let Bmi = (Weight/(Height*Height)*703);
      setbmi(Bmi.toFixed(1));

      if (Bmi < 25) {
        setmessage('You are underweight')
      } else if (Bmi >= 25 && bmi < 30) {
        setmessage('You are a healthy weight')
      } else {
        setmessage('You are overweight')
      }

    }

  }

  let reload = () => {
    window.location.reload()

  }

return (
  <div className="App">
    <div className="Container">
      <h2 className='center'>BMI Calcuator</h2>
      <form onSubmit={CalculateBmi}>
        <div>
          <label>Weight (ibs)</label>
          <input
            type="text"
            placeholder="enter weigth value"
            value={Weight} onChange={(e) => setWeight(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Height (in)</label>
          <input
            type="text"
            placeholder="enter weigth value"
            value={Height}
            onChange={(event) => setHeight(event.target.value)}
          ></input>
        </div>
        <div>
          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn btn-outline" onClick={reload} type="submit">
            Reload
          </button>
        </div>
        <div className='center'>
          <h3>Your Bmi value is:{bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
    </div>
    </div>
  );
}

export default App;
