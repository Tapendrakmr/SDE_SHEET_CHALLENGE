#     For Rotating Elements to right

# Step 1: Reverse the last k elements of the array

# Step 2: Reverse the first n-k elements of the array.

# Step 3: Reverse the whole array.
def reverse(arr, start, end):
    while start < end:
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1


def rightRotateK(arr, k):
    if k < 1:
        return arr
    reverse(arr, 0, len(arr)-k-1)
    reverse(arr, len(arr)-k, len(arr)-1)
    reverse(arr, 0, len(arr)-1)
    print(arr)


k = int(input('Enter k position '))
arr = [int(x) for x in input('Enter arr ').split()]
rightRotateK(arr, k)
