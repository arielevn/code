#17

import random

x = random.randint(1, 100)

if x % 2 == 0:
    print(f'{x} is even number')

else:
    print(f'{x} is not an even number and {x % 2} is the remainder')