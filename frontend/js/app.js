document.getElementById("dietForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const age = document.getElementById("age").value;
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const gender = document.getElementById("gender").value;
  const activity = document.getElementById("activity").value;
  const diabetic = document.getElementById("diabetic").checked;
  const report = document.getElementById("report").files[0];

  const formData = new FormData();
  formData.append("age", age);
  formData.append("weight", weight);
  formData.append("height", height);
  formData.append("gender", gender);
  formData.append("activity", activity);
  formData.append("diabetic", diabetic);

  if (diabetic && report) {
    formData.append("report", report);
  }

  try {
    const res = await fetch("http://127.0.0.1:8000/recommend", {
      method: "POST",
      body: formData
    });

    if (!res.ok) throw new Error("API Error");

    const data = await res.json();
    renderResult(data);

  } catch (err) {
    alert("Error generating diet");
    console.error(err);
  }
});

function renderResult(data) {
  let html = `
    <h2>Daily Calories: ${data.daily_calories}</h2>
    <h3>Total Protein: ${data.total_protein} g</h3>
  `;

  ["breakfast", "lunch", "snack", "dinner"].forEach(meal => {
    html += `<div class="meal"><h3>${meal.toUpperCase()}</h3><ul>`;
    data[meal].forEach(f => {
      html += `<li>${f.food_name} (${f.calories} kcal, Protein ${f.protein}g)</li>`;
    });
    html += `</ul></div>`;
  });

  document.getElementById("result").innerHTML = html;
}
