def appearOnce(arr):
    if len(arr) < 2:
        return arr
    xor = arr[0]
    for i in range(1, len(arr)):
        xor = xor ^ arr[i]
    print('once number', xor)


arr = [int(x) for x in input().split()]
print('appear', appearOnce(arr))
