def missing(arr):
    xor1 = 0
    xor2 = 0
    for i in range(len(arr)-1):
        xor2 = xor2 ^ arr[i]
        xor1 = xor1 ^ (i+1)
    xor1 = xor1 ^ len(arr)
    return (xor1 ^ xor2)


arr = [int(x) for x in input('Enter array ').split()]
print(missing(arr))
