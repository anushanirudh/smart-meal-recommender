from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from .recommendation import generate_diet_plan
from .clinical_parser import parse_clinical_report
import shutil
from pathlib import Path

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = Path(__file__).parent / "uploads"
UPLOAD_DIR.mkdir(exist_ok=True)

@app.post("/recommend")
async def recommend(
    age: int = Form(...),
    weight: float = Form(...),
    height: float = Form(...),
    gender: str = Form(...),
    activity: str = Form(...),
    diabetic: bool = Form(False),
    report: UploadFile = File(None)
):
    diabetic_flag = diabetic

    if diabetic and report:
        file_path = UPLOAD_DIR / report.filename
        with open(file_path, "wb") as f:
            shutil.copyfileobj(report.file, f)

        report_data = parse_clinical_report(str(file_path))
        diabetic_flag = report_data["diabetic"]

    return generate_diet_plan(
        age, weight, height, gender, activity, diabetic_flag
    )