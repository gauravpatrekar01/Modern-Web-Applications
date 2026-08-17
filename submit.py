import pandas as pd
import requests

# 1. Target endpoint for programmatic Google Form submission
FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfgwrKTJIorPyU4R-oXajX1oRcGEBMM8CjqfuRy0eOQ9Utb-w/formResponse"

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

# 2. Load Excel data
EXCEL_FILE = "Emotional Intelligence (EQ) Assessment (Responses).xlsx"
df = pd.read_excel(EXCEL_FILE).dropna(how="all")

print(f"Loaded {len(df)} rows. Starting batch submission...\n")

# 3. Iterate through Excel rows and POST form data
for idx, row in df.iterrows():
    form_data = {
        'entry.1021259574': str(row['Full Name']),
        'entry.445059220': str(row['1. I recognize my emotions as they arise.']),
        'entry.1532803427': str(row['2. I understand what triggers my emotions.']),
        'entry.964342360': str(row['3. I am aware of my strengths.']),
        'entry.638229073': str(row['4. I acknowledge my limitations.']),
        'entry.987829442': str(row['5. I reflect on my behavior regularly.']),
        'entry.2124990920': str(row['6. I understand how my emotions influence my decisions.']),
        'entry.356000756': str(row['7. I can identify signs of stress in myself.']),
        'entry.1928635609': str(row['8. I accept constructive feedback positively.']),
        'entry.1070498666': str(row['9. I express my feelings appropriately.']),
        'entry.1423004547': str(row['10. I take responsibility for my emotional reactions.']),
        'entry.574854924': str(row['11. I remain calm under pressure.']),
        'entry.1336753787': str(row['12. I control my anger effectively.']),
        'entry.132012566': str(row['13. I think before reacting emotionally.']),
        'entry.221619423': str(row['14. I adapt well to unexpected changes.']),
        'entry.852852378': str(row['15. I stay focused during stressful situations.']),
        'entry.1422229813': str(row['16. I recover quickly after setbacks.']),
        'entry.1935244518': str(row['17. I avoid making impulsive decisions.']),
        'entry.24594167': str(row['18. I manage my time and priorities effectively.']),
        'entry.2104996443': str(row['19. I remain optimistic when facing challenges.']),
        'entry.2005938369': str(row['20. I maintain self-discipline in achieving my goals.']),
        'entry.2118769251': str(row['21. I listen carefully when others speak.']),
        'entry.473035985': str(row['22. I understand the feelings of people around me.']),
        'entry.1609261860': str(row['23. I respect opinions that differ from my own.']),
        'entry.1679591726': str(row['24. I notice when someone needs emotional support.']),
        'entry.1294534624': str(row['25. I appreciate cultural and individual differences.']),
        'entry.547775942': str(row["26. I consider others' perspectives before making decisions."]),
        'entry.1554611519': str(row['27. I avoid judging people without understanding them.']),
        'entry.1258338555': str(row['28. I recognize non-verbal emotional cues in others.']),
        'entry.1515950163': str(row['29. I value teamwork and collaboration.']),
        'entry.160305681': str(row["30. I show genuine concern for others' well-being."]),
        'entry.819762837': str(row['31. I communicate clearly and respectfully.']),
        'entry.647211255': str(row['32. I handle conflicts constructively.']),
        'entry.595380175': str(row['33. I encourage and motivate others.']),
        'entry.1656481919': str(row['34. I build trust with classmates and colleagues.']),
        'entry.369295156': str(row['35. I maintain positive relationships during disagreements.']),
        'entry.494282659': str(row['36. I cooperate effectively in team activities.']),
        'entry.1336266607': str(row["37. I appreciate others' contributions."]),
        'entry.1996073940': str(row['38. I provide helpful feedback respectfully.']),
        'entry.1747546963': str(row['39. I resolve misunderstandings through discussion.']),
        'entry.1543686895': str(row['40. I inspire others by setting a positive example.']),
    }

    response = requests.post(FORM_URL, data=form_data, headers=headers)

    if response.status_code == 200:
        print(f"Submitted row {idx + 2} ({row['Full Name']}): Status {response.status_code}")
    else:
        print(f"Failed row {idx + 2} ({row['Full Name']}): Status {response.status_code}")

print("\nProcess finished!")