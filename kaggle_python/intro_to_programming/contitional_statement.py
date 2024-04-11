# conditional statement question 1
def get_grade(i):
    
    if 90 <= i <= 100:
        grade = "A"
    elif 80 <= i <= 89:
        grade = "B"
    elif 70 <= i <= 79:
        grade = "C"
    elif 60 <= i <= 69:
        grade = "D"
    else:
        grade = "F"
    return grade

# conditional statement question 2
def cost_of_project(engraving, solid_gold):
    if solid_gold == True:
        cost = 100 + len(engraving) * 10
    else:
        cost = 50 + len(engraving) * 7
    return cost

# conditional statement question 3
def get_water_bill(num_gallons):
    x = num_gallons
    if 0 <= x <= 8000:
        bill = x * 5/1000
    elif 8001 <= x <= 22000:
        bill = x * 6/1000
    elif 22001 <= x <= 30000:
        bill = x * 7/1000
    elif 30001 <= x:
        bill = x * 10/1000
    return bill

# conditional statement question 4
def get_phone_bill(gb):
    x = gb
    if 15 >= gb:
        bill = 100
    else:
        bill = 100 + 100 * (gb - 15)
    return bill

# conditional statement question 5
get_labels("solid", 21, 68, 3, 0.2, 208, 0)