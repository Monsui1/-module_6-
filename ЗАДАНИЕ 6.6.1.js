//Пример 1

function isPalindrome(Довод) {
    Довод = Довод.replace(/\s/g, '');
    
    if (Довод.toLowerCase() === Довод.toLowerCase().split('').reverse().join('')) {
        console.log(`Слово ${Довод} является палиндромом`);
    } else {
        console.log(`Слово ${Довод} не является палиндромом`);
    }
}

let Довод = "Довод";
isPalindrome(Довод);

//Пример 2

function isPalindrome(Сантимент) {
    Сантимент = Сантимент.replace(/\s/g, '');
    
    if (Сантимент.toLowerCase() === Сантимент.toLowerCase().split('').reverse().join('')) {
        console.log(`Слово ${Сантимент} является палиндромом`);
    } else {
        console.log(`Слово ${Сантимент} не является палиндромом`);
    }
}

let Сантимент = "Сантимент";
isPalindrome(Сантимент);