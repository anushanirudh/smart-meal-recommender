import React, { useState } from "react";
import { generateDiet } from "../services/api";

export default function UserForm({ setResult }) {
  const [form, setForm] = useState({
    age: "",
    weight: "",
    height: "",
    gender: "male",
    goal: "weight_loss",
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(form).forEach((key) => data.append(key, form[key]));
    if (file) data.append("file", file);

    try {
      const result = await generateDiet(data);
      setResult(result);
    } catch (err) {
      alert("Error generating diet");
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <input name="age" placeholder="Age" onChange={handleChange} required />
      <input name="weight" placeholder="Weight (kg)" onChange={handleChange} required />
      <input name="height" placeholder="Height (cm)" onChange={handleChange} required />

      <select name="gender" onChange={handleChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <select name="goal" onChange={handleChange}>
        <option value="weight_loss">Weight Loss</option>
        <option value="maintain">Maintain</option>
        <option value="muscle_gain">Muscle Gain</option>
      </select>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <button type="submit">Generate Meal Plan</button>
    </form>
  );
}
