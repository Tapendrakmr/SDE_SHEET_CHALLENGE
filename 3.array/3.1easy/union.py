# Example 1:
# Input:
# n = 5,m = 5.
# arr1[] = {1,2,3,4,5}
# arr2[] = {2,3,4,4,5}
# Output:
#  {1,2,3,4,5}
def union(arr1, arr2):
    i, j = 0, 0
    union = []
    while i < len(arr1) and j < len(arr2):
        if arr1[i] <= arr2[j]:
            if len(union) == 0 or union[-1] != arr1[i]:
                union.append(arr1[i])
            i += 1
        else:
            if len(union) == 0 or union[-1] != arr2[j]:
                union.append(arr2[j])
            j += 1
    while i < len(arr1):
        if len(union) == 0 or union[-1] != arr1[i]:
            union.append(arr1[i])
            i += 1
    while j < len(arr2):
        if len(union) == 0 or union[-1] != arr2[j]:
            union.append(arr2[j])
            j += 1
    print(union)


arr1 = [int(x) for x in input('Enter array1 ').split()]
arr2 = [int(x) for x in input('Enter array2 ').split()]
union(arr1, arr2)
