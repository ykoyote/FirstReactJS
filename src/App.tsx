import React, { useState } from 'react';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList';
import UseStateComponent from './components/UseStateComponent';
import UseEffectComponent from './components/UseEffectComponent';
import UseContextComponent from './components/UseContextComponent';
import UseReducerComponent from './components/UseReducerComponent';

export interface IState {
  people: {
    name: string,
    age: number,
    img: string,
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      age: 36,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team"
    }
  ])

  return (
    <div className="App">
      <h1>ReactJS Practice</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />

      <div>
        <h1>useState</h1>
        <UseStateComponent />
      </div>

      <div>
        <h1>useEffect</h1>
        <UseEffectComponent />
      </div>

      <div>
        <h1>useContext</h1>
        <UseContextComponent />
      </div>

      <div>
        <h1>useReducer</h1>
        <UseReducerComponent />
      </div>

    </div>
  );
}


export default App;
