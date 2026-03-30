x1 = float(input('Enter x1: '))
x2 = float(input('Enter x2: '))
y1 = float(input('Enter y1: '))
y2 = float(input('Enter y2: '))

# ZeroDivisionFix
if x2 - x1 == 0:
    print('Slope is undefined!')
else:
    slope = (y2 - y1) / (x2 - x1)
    print(f'slope is:  {slope}')