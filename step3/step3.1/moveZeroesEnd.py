# Example 1:
# Input: 1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
# Output: 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
# Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

def moveZeroresAtEnd(arr):
    j = 0
    for i in range(len(arr)):
        if arr[i] != 0:
            arr[j] = arr[i]
            j += 1
    if j < len(arr):
        for k in range(j, len(arr)):
            arr[k] = 0
    print(arr)


arr = [int(x) for x in input('Enter arr ').split()]
moveZeroresAtEnd(arr)
