# %%
import pandas as pd

# Read the CSV file into a DataFrame
df = pd.read_csv('bakery_items.csv')

# Display the first few rows of the DataFrame
df.head()


# %%
df.iloc[607]


# %%
X = df[['price', 'visual_appeal', 'popularity']]

# %%
X.head()

# %%
import pandas as pd
import numpy as np
from sklearn.neighbors import NearestNeighbors

# %%
product = {'price':[6.34],'visual_appeal':7, 'popularity': 6}
demo = pd.DataFrame(data=product, index=None)

# %%
demo.head()

# %%
neighbor = NearestNeighbors(n_neighbors=2, algorithm='brute')


# %%
neighbor.fit(X)

# %%
distances, indices = neighbor.kneighbors(demo)

# %%
print('Recommendations for "This Item":\n')
for i in range(len(distances.flatten())):
  print('{0}: {1}, with a distance of {2}.'.format(i+1, df['name'].iloc[indices.flatten()[i]],distances.flatten()[i]))

# %%

def get_reccomendations(cartItems):
  demo = pd.DataFrame(data=cartItems, index=None)
  distances, indices = neighbor.kneighbors(demo)
  print('Recommendations for "This Item":\n')
  for i in range(len(distances.flatten())):
    print('{0}: {1}, with a distance of {2}.'.format(i+1, df['name'].iloc[indices.flatten()[i]],distances.flatten()[i]))



import pandas as pd
from sklearn.neighbors import NearestNeighbors
 
# Load the dataset
df = pd.read_csv('bakery_items.csv')
 
# Function to get recommendations based on cart items
def get_recommendations(cartItems):
    # Extract features from cart items
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
 
    return recommendations