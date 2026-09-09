#Day 2: 30 Days of python programming

first_name = 'Ariel'
last_name = 'Effendi'
full_name = first_name + ' ' + last_name
country = 'Australia'
city = 'Perth'
age = '29'
year = '1997'
is_married = 'false'
is_true = 'true'
is_light_on = 'true'
hobbies, skills, food = ['gym', 'swimming'], ['python', 'english', 'forklift'], 'omnivore'

print(f'first name = {first_name}')
print(f'last name: {last_name}')
print(f'full name: {full_name}')
print(f'country: {country}')
print(f'length of first name: {len(first_name)}')
print(f'length of last name: {len(last_name)}')
print(f'comparison name: {len(first_name)-len(last_name)}')

num_one = 5
num_two = 4
variable_total = num_one + num_two
variable_diff = num_two - num_one
variable_product = num_two * num_one
variable_division = num_one / num_two
variable_remainder = num_two % num_one
variable_exp = num_one^num_two
floor_division = num_one // num_two

rad = 30
area_of_circle = 3.14 * float(rad ^ 2)
circum_of_circle = 2 * 3.14 * float(rad)

print(area_of_circle)
print(circum_of_circle)


input_rad = int(input('input radian: '))
area = 3.14 * float(input_rad ^ 2)
print(area)

first_name_user = input('first name: ')
print(first_name_user)