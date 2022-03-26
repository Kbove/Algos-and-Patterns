// Is an anagram?
function validAnagram(str1, str2) {
    // add whatever parameters you deem necessary - good luck!
    if (str1.length !== str2.length) {
        return false
    }

    let letters1 = {}
    let letters2 = {}

    for (let i = 0; i < str1.length; i++) {
        letters1[str1[i]] = (letters1[str1[i]] || 0) + 1
    }
    for (let j = 0; j < str2.length; j++) {
        letters2[str2[j]] = (letters2[str2[j]] || 0) + 1
    }

    for (let key in letters1) {
        if (letters2[key] !== letters1[key]) {
            return false
        }
    }
    return true
}

// Multiple pointers, Unique values: Accepts a sorted array and counts the unique values in the array

function countUniqueValues(arr) {
    // add whatever parameters you deem necessary - good luck!
    if (arr.length === 0) {
        return 0
    }

    let left = 0
    let right = 1

    while (right <= arr.length - 1) {
        if (arr[left] === arr[right]) {
            right++
        } else {
            left++
            arr[left] = arr[right]
        }
    }
    return left + 1
}

// Sliding window, given two position integers, find if these integers have the same frequency of digits

function sameFrequency(num1, num2) {
    // good luck. Add any arguments you deem necessary.
    let numStr1 = num1.toString()
    let numStr2 = num2.toString()
    if (numStr1.length !== numStr2.length) {
        return false
    }

    let freq1 = {}
    let freq2 = {}

    for (let i = 0; i < numStr1.length; i++) {
        if (!freq1[numStr1[i]]) {
            freq1[numStr1[i]] = 1
        } else {
            freq1[numStr1[i]]++
        }
    }
    for (let j = 0; j < numStr2.length; j++) {
        if (!freq2[numStr2[j]]) {
            freq2[numStr2[j]] = 1
        } else {
            freq2[numStr2[j]]++
        }
    }

    for (let key in freq1) {
        if (freq1[key] !== freq2[key]) {
            return false
        }
    }
    return true
}

// Frequency counter/multiple pointers: accepts a variable number of args and checks whether there are any duplicates among the args passed in

function areThereDuplicates() {
    // good luck. (supply any arguments you deem necessary.)
    let collection = {}
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for (let key in collection) {
        if (collection[key] > 1) {
            return true
        }
    }
    return false
}

// Multiple pointers, average pair: Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target

function averagePair(arr, avg) {
    // add whatever parameters you deem necessary - good luck!

    let start = 0
    let end = arr.length - 1

    while (start < end) {
        if ((arr[start] + arr[end]) / 2 === avg) {
            return true
        } else if ((arr[start] + arr[end]) / 2 < avg) {
            start++
        } else {
            end--
        }
    }
    return false
}

// Multiple pointers: write a function that takes two strings and checks whether the characters in the first string form a subsequence of the characters in the second string

function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    if (str1.length === 0) return true
    if (str2.length === 0) return false

    if (str1[0] === str2[0]) return isSubsequence(str1.slice(1), str2.slice(1))

    return isSubsequence(str1, str2.slice(1))
}
