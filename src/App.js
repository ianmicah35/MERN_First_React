import logo from './logo.svg';
import './App.css';
import FirstComp from './components/FirstComp.js';
import SecondComp from './components/SecondComp.js';
import CardComp from './components/CardComp.js';

function App() {
  return (
    <div className="App">
      <FirstComp/>
      <SecondComp>
        <h1>Here are some cards:</h1>
      <CardComp cardName="Chuck Norris" health={250} hb="Roundhouse Kick"/>
      <CardComp cardName="Rambo" health={300} hb="Unlimited Ammo"/>
      <CardComp cardName="Mason" health={350} hb="Cuddles"/>
      </SecondComp>
    </div>
  );
}

export default App;
