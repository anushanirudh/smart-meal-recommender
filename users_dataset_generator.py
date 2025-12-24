import random
import pandas as pd

def calculate_calories(age, weight, height, gender, activity):
    if gender == "male":
        bmr = 10*weight + 6.25*height - 5*age + 5
    else:
        bmr = 10*weight + 6.25*height - 5*age - 161

    activity_map = {
        "weight_loss": 1.2,
        "maintain": 1.55,
        "weight_gain": 1.8
    }

    calories = bmr * activity_map[activity]

    if activity == "weight_loss":
        calories -= 400
    elif activity == "weight_gain":
        calories += 400

    return int(calories)

rows = []

for _ in range(1000):
    age = random.randint(18, 60)
    weight = random.randint(45, 120)
    height = random.randint(150, 190)
    gender = random.choice(["male", "female"])
    activity = random.choice(["weight_loss", "maintain", "weight_gain"])
    calories = calculate_calories(age, weight, height, gender, activity)

    rows.append([age, weight, height, gender, activity, calories])

df = pd.DataFrame(rows, columns=[
    "age","weight_kg","height_cm","gender","activity_level","daily_calories"
])

df.to_csv("users.csv", index=False)
print("users.csv generated with 1000 rows")
