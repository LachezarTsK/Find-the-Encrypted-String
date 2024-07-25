
package main

import (
    "fmt"
    "strings"
)

func getEncryptedString(input string, step int) string {
    encryptedString := strings.Builder{}
    for i := range input {
        indexReplace := (i + step) % len(input)
        encryptedString.WriteByte(input[indexReplace])
    }
    return encryptedString.String()
}
