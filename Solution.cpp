
#include <string>
using namespace std;

class Solution {

    static const char EMPTY_SPACE = ' ';

public:
    string getEncryptedString(const string& input, int step) const {
        string encryptedString(input.length(), EMPTY_SPACE);
        for (int i = 0; i < input.length(); ++i) {
            int indexReplace = (i + step) % input.length();
            encryptedString[i] = input[indexReplace];
        }
        return encryptedString;
    }
};
