# exercise 1
def is_valid_zip(zip_code):
    """Returns whether the input string is a valid (5 digit) zip code
    """
    return len(zip_code) == 5 and zip_code.isdigits()
    pass

help(str.isdigit)

# exercise 2
import re
def word_search(doc_list, keyword):
    """
    Takes a list of documents (each document is a string) and a keyword. 
    Returns list of the index values into the original list for all documents 
    containing the keyword.

    Example:
    doc_list = ["The Learn Python Challenge Casino.", "They bought a car", "Casinoville"]
    >>> word_search(doc_list, 'casino')
    >>> [0]
    """
    keyword_indices = []
    pattern = r'\b{}\b'.format(re.escape(keyword))  # Match the keyword as a whole word

    for i, doc in enumerate(doc_list):
        if re.search(pattern, doc, flags=re.IGNORECASE):
            keyword_indices.append(i)

    return keyword_indices