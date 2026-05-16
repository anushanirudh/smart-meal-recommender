# Smart AI Meal Recommendation System

## Project Overview

Smart AI Meal Recommendation System is an AI-based personalized nutrition recommendation platform that generates healthy meal plans based on user information such as age, weight, height, gender, activity level, goal, and diabetic condition.

The system uses a hybrid approach:
- Machine Learning (LightGBM) for daily calorie prediction
- Rule-based recommendation logic for meal generation

The application supports diabetic users by filtering low glycemic index foods and optionally accepting uploaded medical reports.

---

## Features

- Personalized daily calorie prediction
- Meal plan generation for:
  - Breakfast
  - Lunch
  - Snack
  - Dinner
- Diabetes-aware meal recommendations
- Optional diabetic report upload support
- Deterministic meal generation
- FastAPI backend API
- HTML/CSS/JavaScript frontend interface
- Machine Learning based recommendation engine

---

## Technologies Used

### Backend
- Python
- FastAPI
- Pandas
- Joblib
- LightGBM

### Frontend
- HTML
- CSS
- JavaScript

### Machine Learning
- LightGBM Regressor

---

## Project Structure

```text
MINI_PROJECT/
│
├── backend/
│   └── app/
│       ├── main.py
│       ├── recommendation.py
│       ├── clinical_parser.py
│       ├── utils.py
│       │
│       ├── data/
│       │   ├── foods.csv
│       │   ├── users.csv
│       │   └── uploads/
│       │
│       └── models/
│           └── calorie_macro_predictor_lgbm.pkl
│
├── frontend/
│   ├── index.html
│   ├── results.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
│
├── train_model_lgbm.py
├── requirements.txt
└── README.md
```

# Installation and Setup 
## Clone the Repository 
```python

git clone https://github.com/anushanirudh/smart-meal-recommender.git
```
