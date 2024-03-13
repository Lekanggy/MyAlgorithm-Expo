def concert_queue(N):
    item = "0"
    compare = 1
    while compare < len(N):
        count = 0
        for i in N[:compare]:
            if N[compare] < i:
                count += 1
        item +=str(count)
        compare += 1
    return item


print(concert_queue([6,2,3,8,9,1,2,5,4]))