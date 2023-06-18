def maxConsecuteOne(arr):
    j = 0
    maxi = -999999
    for i in range(len(arr)):
        if arr[i] == 1:
            m = (i-j)
            if m > maxi:
                maxi = m
        else:
            j = i
    print("maxi", maxi)


arr = [int(x) for x in input().split()]
maxConsecuteOne(arr)
