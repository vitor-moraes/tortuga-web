import React, { useState, useEffect } from "react";
import api from "../services/api";
import Create from "../components/habits/Create";

function App() {
  const [habitsData, setHabitsData] = useState<any[]>([]);

  const getHabits = async () => {
    try {
      await api.get("habits.json").then((res) => {
        setHabitsData(() => res.data);
      });
      console.log(habitsData);
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
        <Create />
        {habitsData.length !== 0 ? (
          habitsData.map((habit) => <p key={habit.id}>{habit.name}</p>)
        ) : (
          <h1>Nenhum dado encontrado</h1>
        )}
      </header>
    </div>
  );
}

export default App;
