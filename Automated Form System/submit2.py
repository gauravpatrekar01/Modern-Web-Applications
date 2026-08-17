import pandas as pd
import requests

FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfgwrKTJIorPyU4R-oXajX1oRcGEBMM8CjqfuRy0eOQ9Utb-w/formResponse"

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

# ENTRY IDs extracted from your Google Form
ENTRY_IDS = [
    'entry.1021259574', # Full Name
    'entry.445059220',  # Q1
    'entry.1532803427', # Q2
    'entry.964342360',  # Q3
    'entry.638229073',  # Q4
    'entry.987829442',  # Q5
    'entry.2124990920', # Q6
    'entry.356000756',  # Q7
    'entry.1928635609', # Q8
    'entry.1070498666', # Q9
    'entry.1423004547', # Q10
    'entry.574854924',  # Q11
    'entry.1336753787', # Q12
    'entry.132012566',  # Q13
    'entry.221619423',  # Q14
    'entry.852852378',  # Q15
    'entry.1422229813', # Q16
    'entry.1935244518', # Q17
    'entry.24594167',   # Q18
    'entry.2104996443', # Q19
    'entry.2005938369', # Q20
    'entry.2118769251', # Q21
    'entry.473035985',  # Q22
    'entry.1609261860', # Q23
    'entry.1679591726', # Q24
    'entry.1294534624', # Q25
    'entry.547775942',  # Q26
    'entry.1554611519', # Q27
    'entry.1258338555', # Q28
    'entry.1515950163', # Q29
    'entry.160305681',  # Q30
    'entry.819762837',  # Q31
    'entry.647211255',  # Q32
    'entry.595380175',  # Q33
    'entry.1656481919', # Q34
    'entry.369295156',  # Q35
    'entry.494282659',  # Q36
    'entry.1336266607', # Q37
    'entry.1996073940', # Q38
    'entry.1747546963', # Q39
    'entry.1543686895', # Q40
]

# MAP EXCEL VALUES TO EXACT FORM RADIO BUTTON LABELS
# Change the right-hand strings if your Google Form options have specific text!
VALUE_MAP = {
    '1': '1',  # Replace '1' with '1 - Strongly Disagree' if that's what the radio option says
    '2': '2',  # Replace '2' with '2 - Disagree'
    '3': '3',  # Replace '3' with '3 - Neutral'
    '4': '4',  # Replace '4' with '4 - Agree'
    '5': '5',  # Replace '5' with '5 - Strongly Agree'
}

def clean_val(val, is_radio=False):
    if pd.isna(val):
        return ""
    try:
        f = float(val)
        if f.is_integer():
            val_str = str(int(f))
        else:
            val_str = str(val).strip()
    except (ValueError, TypeError):
        val_str = str(val).strip()
        
    if is_radio:
        return VALUE_MAP.get(val_str, val_str)
    return val_str

EXCEL_FILE = "Emotional Intelligence (EQ) Assessment (Responses).xlsx"
df = pd.read_excel(EXCEL_FILE).dropna(how="all")

# Check if Column 0 is Name or Timestamp
# If Column 0 is 'Timestamp', set START_COL = 1
START_COL = 0  

print(f"Loaded {len(df)} rows.")

for row_idx in range(len(df)):
    form_data = {}
    
    for entry_idx, entry_id in enumerate(ENTRY_IDS):
        col_pos = START_COL + entry_idx
        if col_pos < len(df.columns):
            raw_val = df.iloc[row_idx, col_pos]
            # First item is Name, remaining items are Radio Buttons
            is_radio = (entry_idx > 0)
            form_data[entry_id] = clean_val(raw_val, is_radio=is_radio)

    # Print first row sample to verify radio button values
    if row_idx == 0:
        print("\n--- SAMPLE ROW DATA BEING SENT ---")
        for k in ENTRY_IDS[:3]:
            print(f"{k}: '{form_data[k]}'")
        print("-----------------------------------\n")

    response = requests.post(FORM_URL, data=form_data, headers=headers)
    name = form_data.get('entry.1021259574', f'Row {row_idx+2}')
    print(f"Submitted row {row_idx + 2} ({name}): Status {response.status_code}")

print("\nProcess finished!")