def mapFuc(arr, fn):
    """
    The `mapFunc` function takes an array and a function as input, applies the function to each element
    of the array, and returns a new array with the results.
    
    :param arr: The `arr` parameter is a list of elements that you want to apply a function to
    :param fn: The `fn` parameter in the `mapFunc` function is a callback function that will be applied
    to each element in the `arr` list during the mapping process. This callback function takes two
    arguments: the current element of the array (`arr[i]`) and the index of that element (`i
    :return: The `mapFuc` function is returning a new list `newArr` where each element is the result of
    applying the function `fn` to the corresponding element of the input list `arr`.
    """
    newArr = []
    for i in range(0, len(arr)):
        item = fn(arr[i], i)
        newArr.append(item)
    return newArr


def plus(n, *args):
    return n + 1

def plusOneI(n, x):
    return n + x

arr = [2, 3, 5]
print(mapFuc(arr, plus))

print(mapFuc(arr, lambda a, b: a + b))