x = str('python')
print(f'the length of python is: {len(x)}')

y = str('dragon')
print(f'the length of dragon is: {len(y)}')

z = 'on'
print(z in x and z in y)
    
wish = 'I hope this course is not full of jargon'
jargon = 'jargon'

print(jargon in wish)

print('no "on" in dragon and python: ' , z not in x and z not in y)

num = int(input('input even number: '))
if num % 2 == 0:
    print('this is even number')
else:
    print('this is not an even number')

print('7 // 3 = 2.7: ', 7 // 3 == int(2.7))

print(type('10') == type(10))

#20
#wrong: print(int('9.8') == 10)
print(int(float('9.8')) == 10)

#21
hours = input('Enter hours: ')
rate = input('Enter rate per hour: ')
print('Your weekly earning is: ', int(hours) * int(rate))

#22
years = input('Enter number of years you have lived: ')
seconds = 3600 * 24 * 365
life = int(years) * seconds
print(f'You have lived for {life} seconds.')

#23
