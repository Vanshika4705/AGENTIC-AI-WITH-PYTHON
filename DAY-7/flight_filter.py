flight1 = {
    'code': '6E6673',
    'carrier': 'indigo',
    'source': 'delhi',
    'destinition': 'bengaluru',
    'fare': 5000,
    'duration': 3.5
}


flight2 = {
    'code': 'AI5962',
    'carrier': 'air india',
    'source': 'delhi',
    'destinition': 'bengaluru',
    'fare': 3500,
    'duration': 3
}

flight3 = {
    'code': 'AI2973',
    'carrier': 'air india',
    'source': 'delhi',
    'destinition': 'bengaluru',
    'fare': 6000,
    'duration': 2.5
}

flight4 = {
    'code': '6E2314',
    'carrier': 'indigo',
    'source': 'delhi',
    'destinition': 'bengaluru',
    'fare': 2500,
    'duration': 5
}

flight5 = {
    'code': '6E810',
    'carrier': 'indigo',
    'source': 'delhi',
    'destinition': 'bengaluru',
    'fare': 9000,
    'duration': 2
}

# List of Dictionaries
#.              0       1       2        3        4
flights = [flight1, flight2, flight3, flight4, flight5]




def search(flights, code):
    
    for flight in flights:  
        if flight['code'] == code:
            print(flight)
            break
    else:
        print('No Matching Flight Found for code', code)


def main():
    search(flights, '6E6673')
    search(flights, '6E2314')

if __name__ == '__main__':
    main()
