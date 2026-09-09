import math

# x1 = float(input('Enter x1: '))
# x2 = float(input('Enter x2: '))
# y1 = float(input('Enter y1: '))
# y2 = float(input('Enter y2: '))

x1 = 2
x2 = 2
y1 = 6
y2 = 10

# ZeroDivisionFix
if x2 - x1 == 0:
    print('Slope is undefined!')
else:
    slope = (y2 - y1) / (x2 - x1)
    print(f'slope is:  {slope}')

euclidean = (x2 - x1) + (y2 - y1)
print(f'euclidean is : {euclidean}' )

#Slope is (m = y2-y1/x2-x1). Find the slope and Euclidean distance 
#between point (2, 2) and point (6,10)


