def removeDuplicate(arr):
    i = 0
    for j in range(1, len(arr)):
        if arr[i] != arr[j]:
            i += 1
            arr[i] = arr[j]

    for k in range(i+1):
        print(arr[k], end='')


x = int(input('Enter x '))
arr = [int(x) for x in input('Enter arr ').split()]
removeDuplicate(arr)
5
