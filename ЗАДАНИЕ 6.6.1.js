function isPalindrome(string) {
    let clearString = string.replace(/\s/g, '').toLowerCase();
    
    if (clearString === clearString.split('').reverse().join('')) {
        return `Слово ${string} является палиндромом`;
    } else {
        return `Слово ${string} не является палиндромом`;
    }
}

let dovod = "Довод";
let santiment = "Сантимент";

console.log(isPalindrome(dovod));
console.log(isPalindrome(santiment));