#Calculator
from art import logo

#Add
def add(n1, n2):
    return n1 + n2


#Subtract
def subtract(n1, n2):
    return n1 - n2


#Multiply
def multiply(n1, n2):
    return n1 * n2


#Divide
def divide(n1, n2):
    return n1 / n2



operations = {
    "+" : add,
    "-" : subtract,
    "*" : multiply,
    "/" : divide,
}


def calculator():
    print(logo)
    num1 = float(input("What's the first number?: "))
    for symbol in operations:
        print(symbol)

    is_active = True
    while is_active:

        operation_symbol = input("Pick an operation: ")
        num2 = float(input("What's the second number?: "))

        calculation = operations[operation_symbol]
        answer = calculation(num1, num2)
        
        print(f"""
{num1} {operation_symbol} {num2} = {answer}
        """)
        if input(f"Type 'Y' to continue calculating with {answer}, or type 'N' to start a new calculation. ").lower == "y":
            num1 = answer
        else:
            is_active = False
            calculator()

calculator()