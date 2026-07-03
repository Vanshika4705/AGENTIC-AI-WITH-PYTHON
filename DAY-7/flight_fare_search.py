# Flight Search Based on Fare

flights = [
    {"Flight No": "AI101", "Source": "Delhi", "Destination": "Mumbai", "Fare": 4500},
    {"Flight No": "6E202", "Source": "Delhi", "Destination": "Bangalore", "Fare": 6200},
    {"Flight No": "UK303", "Source": "Mumbai", "Destination": "Chennai", "Fare": 3800},
    {"Flight No": "SG404", "Source": "Delhi", "Destination": "Kolkata", "Fare": 5500},
    {"Flight No": "AI505", "Source": "Bangalore", "Destination": "Hyderabad", "Fare": 2900}
]

max_fare = int(input("Enter your maximum budget (Fare): ₹"))

print("\nAvailable Flights Within Your Budget:\n")

found = False

for flight in flights:
    if flight["Fare"] <= max_fare:
        print(f"Flight No   : {flight['Flight No']}")
        print(f"Source      : {flight['Source']}")
        print(f"Destination : {flight['Destination']}")
        print(f"Fare        : ₹{flight['Fare']}")
        print("-" * 30)
        found = True

if not found:
    print("No flights found within your budget.")
