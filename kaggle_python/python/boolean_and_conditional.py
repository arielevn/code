# smashing candies
def to_smash(total_candies, x=3):
    """Return the number of leftover candies that must be smashed after distributing
    the given number of candies evenly between 3 friends.
    
    >>> to_smash(91)
    1
    """
    smashed = total_candies % x
    if total_candies >= 3:
        print("Splitting", total_candies-smashed, "candies")
    else:
        print("Splitting", "0 candy")

to_smash(91)
to_smash(1)

# concise function
def is_negative(number):
    if number < 0:
        return True
    else:
        return False

def concise_is_negative(number):
    return number < 0

#exclusive or (XOR)
def exactly_one_sauce(ketchup, mustard, onion):
    """Return whether the customer wants either ketchup or mustard, but not both.
    (You may be familiar with this operation under the name "exclusive or")
    """
    return (ketchup ^ mustard) and onion
    pass