function longestUniqueSubstring(str) {
    let longest = '';
    let current = '';
    for (const char of str) {
        if (!current.includes(char)) {
            current += char;
            if (current.length > longest.length) longest = current;
        } else {
            current = current.slice(current.indexOf(char) + 1) + char;
        }
    }
    return longest;
}
console.log(longestUniqueSubstring('abcabcbb')); // "abc"
