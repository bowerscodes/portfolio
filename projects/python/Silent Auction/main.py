from replit import clear
from art import logo

bids = {}

def dictionary_add(name, bid):
    bids[name] = bid
    print(bids)




print(logo)

active = True
while active:
    name = input("What is your Name?: ")
    bid = input("What is your bid?: £")
    dictionary_add(name, bid)
    cont = input("Are there any other bidders? \n(Y/N): ").lower()
    if cont == "y":
        clear()
        active = True
    elif cont == "n":
        all_values = bids.values()
        max_key = max(bids, key=bids.get)
        print(f"the winning bidder is: {max_key} with £{bids[max_key]}")
        active = False