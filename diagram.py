import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# Load CSV
df = pd.read_csv("Emotional Intelligence (EQ) Assessment.csv")

# Assuming the 40 EQ questions are columns 3 to 42
eq_columns = df.columns[2:42]

# Convert responses to numeric
eq_data = df[eq_columns].apply(pd.to_numeric, errors="coerce")

# Calculate total EQ score for each respondent
total_scores = eq_data.sum(axis=1)

# Remove invalid/empty totals
total_scores = total_scores.dropna()

# Calculate mean
mean_score = total_scores.mean()

print("Number of respondents:", len(total_scores))
print("Minimum score:", total_scores.min())
print("Maximum score:", total_scores.max())
print("Average score:", mean_score)

# Plot
plt.figure(figsize=(11, 6))

plt.hist(
    total_scores,
    bins=8,
    edgecolor="black",
    alpha=0.75
)

# Mean line
plt.axvline(
    mean_score,
    linestyle="--",
    linewidth=2,
    label=f"Mean = {mean_score:.2f}"
)

plt.xlabel("Total EQ Score (out of 200)")
plt.ylabel("Number of Respondents")

plt.title(
    "Distribution of Overall EQ Scores",
    fontsize=16,
    fontweight="bold"
)

plt.legend()

plt.grid(
    axis="y",
    linestyle="--",
    alpha=0.25
)

plt.tight_layout()

plt.savefig(
    "overall_eq_score_distribution.png",
    dpi=300,
    bbox_inches="tight"
)

plt.show()