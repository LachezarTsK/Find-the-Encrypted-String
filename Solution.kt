
class Solution {
    fun getEncryptedString(input: String, step: Int): String {
        val encryptedString = StringBuilder(input.length)
        for (i in input.indices) {
            val indexReplace = (i + step) % input.length
            encryptedString.append(input[indexReplace])
        }
        return encryptedString.toString()
    }
}
