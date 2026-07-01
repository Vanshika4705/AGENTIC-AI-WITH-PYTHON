data = [10, 20, 50, 70, 30, 15]
scores = [27, 110, 35, 89, 20, 30]
prices = [1500, 3000, 5000, 1200, 4500]
def find_max(numbers):
    max = numbers[0]
    for index in range(1, len(numbers)):
        if numbers[index] > max:
            max = numbers[index]

    print('max in', numbers, 'is:', max)


find_max(numbers=data)
find_max(numbers=scores)
find_max(numbers=prices)
find_max(prices)
find_max([11, 17, 25, 19, 33])
