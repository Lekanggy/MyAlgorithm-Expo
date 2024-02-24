cards = ['King', 'Queen','Jack', 8, 2, 6, 'King', 5, 3]

def sort_card(arr):
    nums = sorted([n for n in arr if type(n) == int])
    str_item = sorted([n for n in arr if type(n) == str])
    print(nums)
    print(str_item)
    for item in str_item:
        if item == "King":
            str_item.remove("King")
            str_item.append("King")
            
    
    return nums + str_item


print(sort_card(cards))