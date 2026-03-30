name = input("What is your name? ")
age = int(input("How old are you? "))

if age >= 18:
    print("Welcome,", name + "! You are an adult.")
else:
    print("Hi,", name + "! You are still a minor.")