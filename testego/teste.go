package main

import "fmt"

func primo(num int) bool {
    if num < 2 {
        return false
    }
    for i := 2; i < num; i++ {
        if num % i == 0 {
            return false
        }
    }
    return true
}

func main() {
    for i := 0; i < 100000; i++ {
        if primo(i) {
            fmt.Println(i)
        }
    }
}
