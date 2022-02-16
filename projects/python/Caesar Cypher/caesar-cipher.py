alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

def caesar(text, shift, direction):
    encrypted = ""
    decrypted = ""
 
    if direction == "encode":
        for letter in text:
            # check if 'letter' is in the alphabet:
            if letter in alphabet:
                encrypted += alphabet[(((alphabet.index(letter) + shift)) % len(alphabet))]
            # if 'letter' is a symbol / num / space (not in alphabet), it will just be appended as-is.
            else: encrypted += letter
        print(f"the {direction}d text is {encrypted}")
    
    elif direction == "decode":
        for letter in text:
            if letter in alphabet:
                decrypted += alphabet[(((alphabet.index(letter) - shift)) % len(alphabet))]
            else:
                decrypted += letter
        print(f"the {direction}d text is {decrypted}")


from art import logo

print(logo)

# condition for the program to run:
active = True

while active:
    direction = input("Type 'encode' to encrypt, type 'decode' to decrypt:\n")
    text = input("Type your message:\n").lower()
    shift = int(input("Type the shift number:\n"))

    # runs the actual caesar encoder / decoder function.
    caesar(text, shift, direction)

    # once the caesar function has run, check to see what the user wants to do:
    running = input("""
Would you like to run the program again? Type Y or N and press Enter: """).lower()
    if running == "y":
        active = True
    else:
        active = False
        print("Goodbye.")