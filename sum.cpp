// https://leetcode.com/problems/sum-of-two-integers/description/

class Solution {
public:
    int getSum(int a, int b) {
        while (a > 0){
            a--;
            b++;
        }
        while (a < 0){
            a++;
            b--;
        }
        return b;
    }
};