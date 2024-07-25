
using System;

public class Solution
{
    public string GetEncryptedString(string input, int step)
    {
        var encryptedString = new StringBuilder(input.Length);
        for (int i = 0; i < input.Length; ++i)
        {
            int indexReplace = (i + step) % input.Length;
            encryptedString.Append(input[indexReplace]);
        }
        return encryptedString.ToString();
    }
}
