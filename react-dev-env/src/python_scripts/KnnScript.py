import pandas as pd
from sklearn.neighbors import NearestNeighbors

# Load the dataset
df = pd.read_csv('bakery_items.csv')

# Function to get recommendations based on cart items
def get_recommendations(cart_items):
    # Extract features from cart items
    cart_data = df[df['name'].isin(cart_items)][['price', 'visual_appeal', 'popularity']]

    # Train the nearest neighbors model
    neighbor = NearestNeighbors(n_neighbors=2, algorithm='brute')
    neighbor.fit(df[['price', 'visual_appeal', 'popularity']])

    # Perform recommendation for each cart item
    recommendations = []
    for _, item in cart_data.iterrows():
        distances, indices = neighbor.kneighbors([item])
        similar_items = df.iloc[indices.flatten()]
        recommendations.append(similar_items['name'].values.tolist())

    return recommendations
