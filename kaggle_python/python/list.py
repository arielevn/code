#exercise 2
#list the second list's element of the last list
def losing_team_captain(teams):
    return teams[-1][1]
    pass

#exercise 3
#swap item within list
def purple_shell(racers):
    """Given a list of racers, set the first place racer (at the front of the list) to last
    place and vice versa.
    
    >>> r = ["Mario", "Bowser", "Luigi"]
    >>> purple_shell(r)
    >>> r
    ["Luigi", "Bowser", "Mario"]
    """
    racers[0], racers[-1] = racers[-1], racers[0]
    pass

#exercise 5
def fashionably_late(arrivals, name):
    """Given an ordered list of arrivals to the party and a name, return whether the guest with that
    name was fashionably late.
    """
#     ordered_list = arrivals.index(name)
#     return ordered_list >= len(arivals) / 2 and ordered_list != len(arrivals) - 1
#     pass

    total_persons = len(arrivals)
    person = arrivals.index(name)
    if person >= total_persons/2 and person != total_persons-1:
        return True
    else:
        return False