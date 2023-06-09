# Input:
# N = 5
# arr[] = {4, 1, 3, 9, 7}
# Output:
# 1 3 4 7 9
# Explanation:
# Maintain sorted (in bold) and unsorted subarrays.
# Select 1. Array becomes 1 4 3 9 7.
# Select 3. Array becomes 1 3 4 9 7.
# Select 4. Array becomes 1 3 4 9 7.
# Select 7. Array becomes 1 3 4 7 9.
# Select 9. Array becomes 1 3 4 7 9.


# Solution
def selectionSort(x, arr):
    if x < 1:
        return arr

    for i in range(x):
        miniPos = i
        for j in range(i+1, x):
            if arr[j] < arr[miniPos]:
                miniPos = j
        temp = arr[i]
        arr[i] = arr[miniPos]
        arr[miniPos] = temp
    print(arr)
    return


x = int(input("enter number"))
arr = [int(x) for x in input().split()]

selectionSort(x, arr)
