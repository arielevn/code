import random

options = ['rock', 'paper', 'scissors']

user_choice = input()

comp_choice = random.choice(options)

if user_choice == comp_choice:
    print('The result is a tie')
elif user_choice == 'rock' and comp_choice == 'paper':
    print('computer wins')
elif user_choice == 'paper' and comp_choice == 'scissors':
    print('computer wins')
elif user_choice == 'scissors' and comp_choice == 'rock':
    print('computer wins')
else:
    print('computer loss')
