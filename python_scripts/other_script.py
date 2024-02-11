# Import necessary libraries
import pandas as pd
from sklearn.neighbors import NearestNeighbors
 
# Read the CSV file into a DataFrame
df = pd.read_csv('bakery_items.csv')
 
# Extract features from cart items (assuming cartItems is a list of items in the cart)
# Map cart items to corresponding rows in the DataFrame
cart_data = df[df['name'].isin(cartItems)][['price', 'visual_appeal', 'popularity']]
 
# Train the nearest neighbors model
neighbor = NearestNeighbors(n_neighbors=2, algorithm='brute')
neighbor.fit(df[['price', 'visual_appeal', 'popularity']])
 
# Perform recommendation for each cart item
recommendations = []
for _, item in cart_data.iterrows():
    distances, indices = neighbor.kneighbors([item])
    similar_items = df.iloc[indices.flatten()]
    recommendations.append(similar_items['name'].values.tolist())
 
# Return recommendations to frontend
return recommendations