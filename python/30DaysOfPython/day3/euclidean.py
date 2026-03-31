import math

x1 = int(input('input x1: '))
x2 = int(input('input x2: '))
y1 = int(input('input y1: '))
y2 = int(input('input y2: '))

distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2) 
print(f'euclidean distance is: {distance}')