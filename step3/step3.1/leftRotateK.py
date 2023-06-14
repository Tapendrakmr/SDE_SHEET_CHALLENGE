# Step 1: Reverse the first k elements of the array

# Step 2: Reverse the last n-k elements of the array.

# Step 3: Reverse the whole array.
def reverse(arr, start, end):
    while start < end:
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1


def lefRotateK(arr, k):
    if k < 1:
        return arr
    reverse(arr, 0, k-1)
    reverse(arr, k, len(arr)-1)
    reverse(arr, 0, len(arr)-1)
    print('Arr', arr)


k = int(input('Enter k position '))
arr = [int(x) for x in input('Enter arr ').split()]
lefRotateK(arr, k)
