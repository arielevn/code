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