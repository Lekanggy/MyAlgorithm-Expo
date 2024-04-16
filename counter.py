def counter():
    count = 0

    def increment():
        nonlocal count  # Use nonlocal to indicate we're modifying the count variable in the outer scope
        count += 1
        return count

    return increment

# Usage
counter1 = counter()
print(counter1())  # Output: 1
print(counter1())  # Output: 2


    
