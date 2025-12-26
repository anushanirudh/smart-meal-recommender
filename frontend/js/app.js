document.getElementById("dietForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const resultDiv = document.getElementById("result");
    const submitBtn = document.getElementById("submitBtn");

    // UI Feedback
    submitBtn.innerHTML = `<i class="fas fa-circle-notch fa-spin"></i> Analyzing Biometrics...`;
    submitBtn.disabled = true;

    const formData = new FormData();
    formData.append("age", document.getElementById("age").value);
    formData.append("weight", document.getElementById("weight").value);
    formData.append("height", document.getElementById("height").value);
    formData.append("gender", document.getElementById("gender").value);
    formData.append("activity", document.getElementById("activity").value);
    formData.append("diabetic", document.getElementById("diabetic").checked);

    const reportFile = document.getElementById("report").files[0];
    if (reportFile) formData.append("report", reportFile);

    try {
        const response = await fetch("http://127.0.0.1:8000/recommend", {
            method: "POST",
            body: formData
        });

        if (!response.ok) throw new Error("Server Error");

        const data = await response.json();
        
        resultDiv.style.display = "block";
        renderResult(data);
        resultDiv.scrollIntoView({ behavior: 'smooth' });

    } catch (error) {
        console.error(error);
        alert("Connection Failed. Ensure your Python server is running.");
    } finally {
        submitBtn.innerHTML = `Generate My Plan <i class="fas fa-wand-magic-sparkles"></i>`;
        submitBtn.disabled = false;
    }
});

function renderResult(data) {
    let html = `
        <div style="text-align:center;">
            <h2 style="font-size: 2rem; margin:0;">Your Wellness Blueprint</h2>
            <div class="stats-banner">
                <div class="stat-item">
                    <span class="stat-label">DAILY CALORIES</span>
                    <span class="stat-value">${data.daily_calories} kcal</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">TOTAL PROTEIN</span>
                    <span class="stat-value">${data.total_protein}g</span>
                </div>
            </div>
        </div>
        <div class="meal-grid">
    `;

    ["breakfast", "lunch", "snack", "dinner"].forEach(meal => {
        if (data[meal]) {
            html += `
                <div class="meal-item">
                    <h3><i class="fas fa-utensils"></i> ${meal}</h3>
                    <ul>`;
            data[meal].forEach(f => {
                html += `
                    <li>
                        <div style="display:flex; flex-direction:column;">
                            <span style="font-weight:700;">${f.food_name}</span>
                            <span class="p-badge">Protein: ${f.protein}g</span>
                        </div>
                        <span class="c-text">${f.calories} kcal</span>
                    </li>`;
            });
            html += `</ul></div>`;
        }
    });

    html += `</div>`;
    document.getElementById("result").innerHTML = html;
}