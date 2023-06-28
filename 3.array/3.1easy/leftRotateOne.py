# Example 1:
# Input: N = 5, array[] = {1,2,3,4,5}
# Output: 2,3,4,5,1

# BRUT
def leftRotateOne(arr):
    temp = arr[0]
    for i in range(len(arr)-1):
        arr[i] = arr[i+1]
    arr[-1] = temp
    return arr


def leftRotate(arr, k):
    if k < 1:
        return arr
    for i in range(k):
        leftRotateOne(arr)
    print("arr", arr)


k = int(input('Enter k position '))
arr = [int(x) for x in input('Enter arr ').split()]
leftRotate(arr, k)
