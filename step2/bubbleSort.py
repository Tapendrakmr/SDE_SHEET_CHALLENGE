# Input:
# N = 5
# arr[] = {4, 1, 3, 9, 7}
# Output:
# 1 3 4 7 9
def bubbleSort(n, arr):
    if n < 2:
        return arr
    for i in range(n-1, -1, -1):
        for j in range(0, i):
            if arr[j] > arr[i]:
                temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
    print(arr)


n = int(input('Enter number '))
arr = [int(x) for x in input('Enter array').split()]
bubbleSort(n, arr)
