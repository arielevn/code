x = ['python', 'dragon']
python = len(x[0])
dragon = len(x[1])
print(python)
print(dragon)
print(python == dragon)

sentence_1 = 'I hope this course is not full of jargon'
check = 'jargon' in sentence_1
print(check)

check_1 = 'on' in x[0] and 'on' in x[1]
print(check_1)

python_float = float(len(x[0]))
print(python_float)
python_string = str(python_float)
print(python_string)