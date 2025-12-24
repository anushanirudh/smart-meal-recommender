import pandas as pd
import joblib
from lightgbm import LGBMRegressor

df = pd.read_csv("backend/app/data/users.csv")

df["gender"] = df["gender"].str.lower().map({"male": 0, "female": 1})
df["activity_level"] = df["activity_level"].map({
    "weight_loss": 0,
    "maintain": 1,
    "weight_gain": 2
})

X = df[["age", "weight_kg", "height_cm", "gender", "activity_level"]]
y = df["daily_calories"]

model = LGBMRegressor(n_estimators=300, learning_rate=0.05)
model.fit(X, y)

joblib.dump(model, "backend/app/models/calorie_lgbm.pkl")
print("✅ LightGBM model trained and saved")
