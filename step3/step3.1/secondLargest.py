# Input: [1,2,4,7,7,5]
# Output: Second Smallest : 2
# 	Second Largest : 5
# Explanation: The elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5 and second smallest is 2
def secondElement(arr):
    mini = 999999
    maxi = -999999
    secMini = 0
    secMax = 0
    for x in arr:
        if x > maxi:
            secMax = maxi
            maxi = x
        elif x > secMax and x != maxi:
            secMax = x
        if x < mini:
            secMini = mini
            mini = x
        elif x < secMini and x != mini:
            secMini = x
    print('secMax', secMax, 'max', maxi)
    print('secMini', secMini, 'mini', mini)


x = int(input('Enter number '))
arr = [int(x) for x in input('Enter arr ').split()]

secondElement(arr)
