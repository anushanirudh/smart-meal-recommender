import React, { useState } from "react";
import UserForm from "./components/UserForm";
import DietResult from "./components/DietResult";

export default function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="container">
      <h1>🥗 Plan My Diet</h1>
      <p className="subtitle">
        AI-Powered Personalized Nutrition Recommendation
      </p>

      <UserForm setResult={setResult} />

      {result && <DietResult data={result} />}
    </div>
  );
}
