import pandas as pd

foods = [
    ("Idli","breakfast",65,2,13,1,1,55,"diabetes"),
    ("Oats Porridge","breakfast",150,6,27,3,4,40,"weight_loss"),
    ("Egg Omelette","breakfast",180,12,2,14,0,10,"general"),
    ("Grilled Chicken","lunch",280,32,1,13,0,0,"weight_loss"),
    ("Fish Fry","lunch",220,28,2,12,0,0,"general"),
    ("Chapati","lunch",118,4,18,2,3,60,"general"),
    ("Rice","lunch",130,2,28,0,1,70,"general"),
    ("Paneer Curry","dinner",240,16,6,15,1,45,"general"),
    ("Tofu Curry","dinner",210,18,8,10,2,30,"weight_loss"),
    ("Vegetable Soup","dinner",95,2,15,3,2,25,"diabetes"),
    ("Curd","snack",80,5,3,4,0,35,"diabetes"),
    ("Protein Bar","snack",220,20,21,6,3,45,"weight_gain"),
    ("Fruit Salad","snack",120,2,28,1,4,50,"general")
]

rows = []
fid = 1

for i in range(80):  # repeat variations
    for f in foods:
        rows.append([fid, *f])
        fid += 1

df = pd.DataFrame(rows, columns=[
    "food_id","food_name","category","calories",
    "protein","carbs","fat","fiber",
    "glycemic_index","suitable_for"
])

df.to_csv("foods.csv", index=False)
print("foods.csv generated")
