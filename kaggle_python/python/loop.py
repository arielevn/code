#exercise 1
def has_lucky_number(nums):
    """Return whether the given list of numbers is lucky. A lucky list contains
    at least one number divisible by 7.
    """
    for num in nums:
        if num % 7 == 0:
            return True
        else:
            return False

#exercise 2
def elementwise_greater_than(L, thresh):
    """Return a list with the same length as L, where the value at index i is 
    True if L[i] is greater than thresh, and False otherwise.
    
    >>> elementwise_greater_than([1, 2, 3, 4], 2)
    [False, False, True, True]
    """
    result = []
    for x in L:
        result.append(x > thresh)
    return result

# exercise 3
def menu_is_boring(meals):
    """Given a list of meals served over some period of time, return True if the
    same meal has ever been served two days in a row, and False otherwise.

    """
    for i in range(len(meals)-1):
        if meals[i] == meals[i+1]:
            return True
    return False
    pass

# exercise 4
def play_slot_machine(n_runs):
    """Run the slot machine n_runs times and return the average net profit per run.
    Example calls (note that return value is nondeterministic!):
    >>> estimate_average_slot_payout(1)
    -1
    >>> estimate_average_slot_payout(1)
    0.5
    """
    for i in range(n_runs):
        profit = play_slot_machine()
        average_profit = sum(profit)/n_runs
    return average_profit