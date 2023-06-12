# Example 1:
# Input: N = 5, array[] = {1,2,3,4,5}
# Output: True.
# Explanation: The given array is sorted i.e Every element in the array is smaller than or equals to its next values, So the answer is True.

def sortArr(arr):
    sort = True
    for i in range(0, len(arr)-1):
        if arr[i+1] < arr[i]:
            sort = False
    if sort == False:
        print('not sorted')
    else:
        print('sorted')


x = int(input())
arr = [int(x) for x in input('Enter array ').split()]
sortArr(arr)
