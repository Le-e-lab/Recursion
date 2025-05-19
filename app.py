class Solution:
    def fib(self, n):

        if n <= 1:
            return n
        a,b = 0,1

        for _ in range (2,n+1):
            temp = b
            b = a + b
            a = temp

        return b 
            