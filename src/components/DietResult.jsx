export default function DietResult({ data }) {
  return (
    <div className="result">
      <h2>Daily Calories: {data.daily_calories} kcal</h2>
      <h3>Total Protein: {data.total_protein} g</h3>

      <table>
        <thead>
          <tr>
            <th>Meal</th>
            <th>Food</th>
            <th>Calories</th>
            <th>Protein</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data.meals).map(([meal, items]) =>
            items.map((food, i) => (
              <tr key={meal + i}>
                <td>{meal}</td>
                <td>{food.food_name}</td>
                <td>{food.calories}</td>
                <td>{food.protein}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
