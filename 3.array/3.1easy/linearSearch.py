def search(arr, x):
    for i in range(len(arr)):
        if arr[i] == x:
            return print('Yes')
    return print('No')


x = int(input())
arr = [int(x) for x in input('Enter array ').split()]
search(arr, x)
