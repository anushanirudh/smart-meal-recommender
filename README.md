# 🍽 Smart AI Meal Recommendation System

An AI-powered personalized meal recommendation system that generates healthy and personalized diet plans based on user details such as age, weight, height, activity level, and diabetic condition.

The project uses:
- LightGBM Machine Learning model for calorie prediction
- FastAPI backend
- HTML/CSS/JavaScript frontend
- Rule-based nutrition filtering
- Diabetes-aware meal recommendations

---

# 🚀 Features

✅ Personalized calorie prediction  
✅ Breakfast, Lunch, Snack, Dinner meal generation  
✅ Diabetes-aware food filtering  
✅ PDF diabetic report upload support  
✅ Deterministic recommendations (same input → same output)  
✅ FastAPI backend API  
✅ Interactive frontend interface  
✅ ML + Rule-based hybrid recommendation system  

---

# 🧠 Technologies Used

## Backend
- FastAPI
- Python
- Pandas
- LightGBM
- Joblib

## Frontend
- HTML
- CSS
- JavaScript

## Machine Learning
- LightGBM Regressor

---

# 📂 Project Structure

```text
MINI_PROJECT/
│
├── backend/
│   └── app/
│       ├── main.py
│       ├── recommendation.py
│       ├── clinical_parser.py
│       ├── utils.py
│       ├── data/
│       │   ├── foods.csv
│       │   ├── users.csv
│       │   └── uploads/
│       └── models/
│           └── calorie_macro_predictor_lgbm.pkl
│
├── frontend/
│   ├── index.html
│   ├── results.html
│   ├── css/
│   └── js/
│
├── train_model_lgbm.py
├── requirements.txt
└── README.md