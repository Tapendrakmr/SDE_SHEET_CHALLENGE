# Input:
# N = 5
# arr[] = { 4, 1, 3, 9, 7}
# Output:
# 1 3 4 7 9

def insertionSort(n, arr):
    if n < 2:
        return arr
    for i in range(n):
        j = i
        while (j > 0 and arr[j-1] > arr[j]):
            temp = arr[j-1]
            arr[j-1] = arr[j]
            arr[j] = temp
            j -= 1
    print(arr)


n = int(input('Enter number '))
arr = [int(x) for x in input('Enter array').split()]
insertionSort(n, arr)
