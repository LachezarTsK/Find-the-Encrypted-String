
public class Solution {

    public String getEncryptedString(String input, int step) {
        StringBuilder encryptedString = new StringBuilder(input.length());
        for (int i = 0; i < input.length(); ++i) {
            int indexReplace = (i + step) % input.length();
            encryptedString.append(input.charAt(indexReplace));
        }
        return encryptedString.toString();
    }
}
