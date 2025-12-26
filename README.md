# 🥗Personalized_Nutrition_Recommendation_System
## 🎯 Project Overview

This project presents an AI-driven Personalized Nutrition Recommendation System that integrates medical report analysis, food intake data, machine learning models, deep learning techniques, and a modern web interface to deliver customized diet and meal recommendations. The system bridges the gap between raw health data and actionable nutrition guidance by transforming medical reports and lifestyle inputs into personalized meal plans.

## 🚀 Key Features Implemented
### . Personalized Health Data Intake (Multiple Input Modes)

-**📄 Medical Report Upload:** Users can upload scanned medical reports (image/PDF).

-**📝 Manual Health Entry:** Age, height, weight, gender, activity level, and health conditions.

-**🍽️ Food Intake Information:** Optional food log and lifestyle details.

-**🔁 Flexible Input Design:** Users may choose either medical reports or manual inputs, or both.

### 2. Intelligent Medical Report Analysis (OCR + NLP)

-**🧾 OCR-Based Text Extraction:** Extracts values such as blood glucose, HbA1c, cholesterol, hemoglobin, and vitamin levels from reports.

-**🧠 LLM-Based Interpretation:** Uses Large Language Models to interpret extracted medical markers.

-**📊 Health Marker Structuring:** Converts unstructured report text into structured health parameters.

-**📄 PDF & Image Support:** Works with scanned lab reports and medical documents.

### 3. Machine Learning & Deep Learning Models

-**🤖 Calorie Prediction Models:**

LightGBM / Gradient Boosting for calorie requirement estimation.

-**📐 BMI & BMR Calculation:**

BMI classification (Underweight, Normal, Overweight, Obese).

BMR using Mifflin–St Jeor Equation as baseline.

-**🧬 Personalized Diet Logic:**

Adjusts recommendations based on diseases (diabetes, obesity, hypertension).

Considers activity level and nutritional constraints.

### 4. Smart Meal Recommendation Engine

-**🥘 Balanced Meal Planning:** Generates meals for breakfast, lunch, snacks, and dinner.

-**⚖️ Macro & Micro-Nutrient Balance:** Protein, carbs, fats, fiber, and calories.

-**🚫 Condition-Based Filtering:**

Low glycemic foods for diabetes.

Weight-loss or weight-gain oriented plans.

🔄 Adaptive Recommendations: Updates meal plans based on user data changes.

### 5. Advanced Analytics Dashboard

-**📊 Nutrition Breakdown:** Daily calorie and nutrient distribution.

-**📈 Health Insights:** Trends derived from medical markers.

-**🧠 AI Suggestions:** Smart dietary advice based on health status.

-**📥 PDF Download:** Personalized nutrition plan export option.

#### 6. Modern UI/UX Design

-🎨 Clean & Professional Interface built using Streamlit.

-📱 Responsive Design suitable for desktop and mobile devices.

-🌈 Visual Indicators for health risk and nutritional balance.

-🧭 User-Friendly Navigation for report upload and result viewing.

### 7. Real-Time Recommendation Delivery

⚡ Instant Analysis after upload or data submission.

📄 Final Nutrition Report displayed clearly.

📥 Downloadable Meal Plan for offline use.

🛠️ Technical Implementation
Core Technologies

Frontend: Streamlit with custom UI components

Backend: Python

ML / DL Libraries: scikit-learn, LightGBM, NumPy, Pandas

OCR: Tesseract, pytesseract

LLM Integration: Gemini / LLM-based health interpretation

Data Storage: SQLite / JSON-based structured storage

Model Features

Categorical: Gender, activity level, disease type

Numerical: Age, height, weight, medical values

Derived Metrics: BMI, BMR, daily calorie needs

Target Output: Personalized calorie intake and meal plan

📋 Usage Flow
Medical Report Flow

User uploads medical report

OCR extracts health markers

LLM interprets health condition

ML model estimates calorie needs

Personalized meal plan generated

Manual Entry Flow

User enters personal and lifestyle details

BMI and BMR calculated

ML model predicts daily calories

Diet plan generated accordingly

📊 Performance Metrics

OCR Accuracy: ≥ 90% on medical reports

ML Prediction Response: < 1 second

Report Processing Time: < 2 seconds

System Scalability: Designed for multiple users

📈 Future Enhancements

🧠 Advanced deep learning models for nutrition prediction

📱 Mobile application development

⌚ Wearable device integration (steps, heart rate)

🥗 Regional and cultural food customization

🤖 AI chatbot for nutrition guidance

📝 Conclusion

The Personalized Nutrition Recommendation System delivers an intelligent, scalable, and user-centric solution for transforming medical and lifestyle data into meaningful dietary guidance. By combining OCR, machine learning, deep learning, and LLM-based interpretation, the system empowers users to make informed nutritional decisions, supports preventive healthcare, and promotes healthier lifestyles through personalized meal planning.
