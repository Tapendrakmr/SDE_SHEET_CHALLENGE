# Example 1:
# Input: N = 6, array[] = {13,46,24,52,20,9}
# Output: 9,13,20,24,46,52
# Explanation: After sorting we get 9,13,20,24,46,52

def recurseBubble(arr, x):
    if x == 1:
        return

    for i in range(x-1):
        if arr[i+1] < arr[i]:
            arr[i+1], arr[i] = arr[i], arr[i+1]
    recurseBubble(arr, x-1)


x = int(input('Enter number '))
arr = [int(x) for x in input('Enter array ').split()]
recurseBubble(arr, x)
print(arr)
