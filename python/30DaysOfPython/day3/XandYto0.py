# def calculate_y(x):
#     return x**2 + 6*x + 9

# for x in range(-10, 10):
#     print(calculate_y(x))
# my code

import math
import random

def calculate_y(x):
    return x**2 + 6*x + 9

# Let's keep guessing until we find y = 0
found = False
attempts = 0

while not found:
    attempts += 1
    # Pick a random integer between -20 and 20
    guess = random.randint(-20, 20)
    
    if calculate_y(guess) == 0:
        print(f"Found it! x = {guess} makes y = 0.")
        print(f"It took {attempts} random guesses.")
        found = True
    