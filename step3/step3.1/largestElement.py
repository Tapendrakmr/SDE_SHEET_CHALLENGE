
# Example2:
# Input: arr[] = {8,10,5,7,9};
# Output: 10
# Explanation: 10 is the largest element in the array.
def largestElement(arr):
    maxi = -999999
    for x in arr:
        if x > maxi:
            maxi = x
    print(maxi, 'is the largest element')


x = int(input('Enter number '))
arr = [int(x) for x in input('Enter Arr ').split()]

largestElement(arr)
