import logo from 'C:/Mahir/React Practice/app0/src/logo.svg';
import './Page2.css';
import { useState } from 'react';
import Button from 'C:/Mahir/React Practice/app0/src/components/Button';

export default function Page2() {
  const [b1count,setb1Count] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button className="Button1" text={b1count==0? "Click me!":"Clicked " + b1count.toString() + " times" } 
        onClick={Button1OnClick}></Button>
      </header>

      

    </div>
  );
  function Button1OnClick(){
    setb1Count(b1count+1)

}
}