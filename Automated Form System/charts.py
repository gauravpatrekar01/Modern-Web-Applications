import pandas as pd
import plotly.express as px

# Load dataset
df = pd.read_excel('Emotional Intelligence (EQ) Assessment (Responses).xlsx')

# Calculate question averages
q_cols = [c for c in df.columns if c not in ['Timestamp', 'Full Name']]
averages = df[q_cols].mean().reset_index()
averages.columns = ['Question', 'Average Score']

# Plot interactive bar chart
fig = px.bar(
    averages, 
    x='Average Score', 
    y='Question', 
    orientation='h',
    title='Average Score per EQ Assessment Item',
    range_x=[1, 5],
    color='Average Score',
    color_continuous_scale='Blues'
)

fig.write_html('eq_analytics.html')
print("Dashboard generated: eq_analytics.html")