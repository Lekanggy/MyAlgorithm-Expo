def return_duplicates(arr):
    #Return dupliacte using freqency table
    freq = {}
    duplicate = []
    for i in arr:
        if i in freq:
            freq[i]+= freq[i]
        else:
            freq[i] = 1
        
        if freq[i] > 1:
            duplicate.append(i)    
       
        
    return duplicate

print(return_duplicates([1,2,3,1,4,5,5, 6,7,7,8,10]))