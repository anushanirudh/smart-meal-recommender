import pdfplumber
import re

def parse_clinical_report(pdf_path: str):
    result = {
        "diabetic": False,
        "hba1c": None,
        "fbs": None
    }

    with pdfplumber.open(pdf_path) as pdf:
        text = ""
        for page in pdf.pages:
            text += page.extract_text() + "\n"

    hba1c = re.search(r"HbA1c[:\s]+([\d.]+)", text, re.IGNORECASE)
    fbs = re.search(r"Fasting.*?([\d]+)\s*mg/dL", text, re.IGNORECASE)

    if hba1c:
        result["hba1c"] = float(hba1c.group(1))
        if result["hba1c"] >= 6.5:
            result["diabetic"] = True

    if fbs:
        result["fbs"] = int(fbs.group(1))
        if result["fbs"] >= 126:
            result["diabetic"] = True

    return result