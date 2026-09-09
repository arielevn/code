class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def display_card(self):
        print(f"[{self.value} of {self.suit}]")

# Object Instantiation
card_one = Card("Spades", "Ace")
card_two = Card("Hearts", "10")

# Method Execution
card_one.display_card()
card_two.display_card()