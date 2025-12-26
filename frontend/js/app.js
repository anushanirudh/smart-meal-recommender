document.getElementById("dietForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const resultDiv = document.getElementById("result");
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.innerText = "Analyzing Biometrics...";
    submitBtn.disabled = true;

    const formData = new FormData();
    formData.append("age", document.getElementById("age").value);
    formData.append("weight", document.getElementById("weight").value);
    formData.append("height", document.getElementById("height").value);
    formData.append("gender", document.getElementById("gender").value);
    formData.append("activity", document.getElementById("activity").value);
    formData.append("diabetic", document.getElementById("diabetic").checked);

    const report = document.getElementById("report").files[0];
    if (report) formData.append("report", report);

    try {
        const response = await fetch("http://127.0.0.1:8000/recommend", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        
        resultDiv.style.display = "block";
        renderResult(data);
        resultDiv.scrollIntoView({ behavior: 'smooth' });

    } catch (err) {
        alert("Server connection failed. Please try again.");
    } finally {
        submitBtn.innerText = "Generate Clinical Plan";
        submitBtn.disabled = false;
    }
});

function renderResult(data) {
    let html = `
        <div class="stats-header">
            <div class="stat-item">
                <h4>Daily Calorie Target</h4>
                <p>${data.daily_calories} kcal</p>
            </div>
            <div class="stat-item">
                <h4>Total Protein Target</h4>
                <p>${data.total_protein}g</p>
            </div>
        </div>
        <div class="meal-grid">
    `;

    ["breakfast", "lunch", "snack", "dinner"].forEach(meal => {
        if (data[meal]) {
            html += `
                <div class="meal-card">
                    <h3><i class="fas fa-clock"></i> ${meal}</h3>
                    <ul>`;
            data[meal].forEach(f => {
                html += `
                    <li>
                        <div>
                            <span class="food-name">${f.food_name}</span><br>
                            <span class="protein-tag">Protein: ${f.protein}g</span>
                        </div>
                        <span class="cal-text">${f.calories} kcal</span>
                    </li>`;
            });
            html += `</ul></div>`;
        }
    });

    html += `</div>`;
    document.getElementById("result").innerHTML = html;
}