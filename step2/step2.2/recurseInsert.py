# Example 1:
# Input: N = 6, array[] = {13,46,24,52,20,9}
# Output: 9,13,20,24,46,52
# Explanation: After sorting we get 9,13,20,24,46,52

def recurseInsert(arr, i, x):
    if i == x:
        return
    j = i
    while j > 0 and arr[j-1] > arr[j]:
        arr[j-1], arr[j] = arr[j], arr[j-1]
        j -= 1
    recurseInsert(arr, i+1, x)


x = int(input('Enter number '))
arr = [int(x) for x in input('Enter array ').split()]

recurseInsert(arr, 0, x)
print(arr)
