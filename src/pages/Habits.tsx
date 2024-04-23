import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import api from "../services/api";

function App() {
  const [habitsData, setHabitsData] = useState<any[]>([]);

  const getHabits = async () => {
    try {
      await api.get("habits.json").then((res) => {
        setHabitsData(() => res.data);
      });
      console.log(habitsData)
    } catch (error) {
      console.log("ERRO");
      console.log(error);
    }
  };

  useEffect(() => {
    getHabits();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {habitsData.length !== 0 ? (
          habitsData.map((habit) => (<p key={habit.id}>{habit.name}</p>))
        ) : (
          <h1>Nenhum dado encontrado</h1>
        )}
      </header>
    </div>
  );
}

export default App;
