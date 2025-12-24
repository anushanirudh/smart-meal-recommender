import pandas as pd
import joblib
from pathlib import Path

MODEL_PATH = Path(__file__).parent / "models" / "calorie_lgbm.pkl"
FOODS_PATH = Path(__file__).parent / "data" / "foods.csv"

model = joblib.load(MODEL_PATH)
foods = pd.read_csv(FOODS_PATH)

def generate_diet_plan(age, weight, height, gender, activity, diabetic=False):
    gender_val = 1 if gender.lower() == "male" else 0
    activity_map = {"weight_loss": 0, "maintain": 1, "weight_gain": 2}

    X = [[age, weight, height, gender_val, activity_map[activity]]]
    daily_calories = int(model.predict(X)[0])

    if diabetic:
        foods_filtered = foods[
            (foods["glycemic_index"] <= 55) &
            (foods["suitable_for"].isin(["diabetes", "general"]))
        ]
    else:
        foods_filtered = foods.copy()

    plan = {}
    total_protein = 0

    for meal in ["breakfast", "lunch", "snack", "dinner"]:
        meal_items = foods_filtered[
            foods_filtered["category"] == meal
        ].drop_duplicates("food_name")

        sample = meal_items.sample(
            n=min(3, len(meal_items)),
            replace=False,
            random_state=42
        )

        plan[meal] = sample[[
            "food_name", "calories", "protein"
        ]].to_dict(orient="records")

        total_protein += sample["protein"].sum()

    return {
        "daily_calories": daily_calories,
        "total_protein": int(total_protein),
        "breakfast": plan["breakfast"],
        "lunch": plan["lunch"],
        "snack": plan["snack"],
        "dinner": plan["dinner"]
    }
