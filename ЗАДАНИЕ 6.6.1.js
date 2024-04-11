//Пример 1

function isPalindrome(Довод) {
    Довод = Довод.toLowerCase();
    Довод = Довод.replace(/\s/g, '');
    
    if (Довод === Довод.split('').reverse().join('')) {
        console.log(`Слово ${Довод} является палиндромом`);
    } else {
        console.log(`Слово ${Довод} не является палиндромом`);
    }
}

let Довод = "Довод";
isPalindrome(Довод);

//Пример 2

function isPalindrome(Сантимент) {
    Сантимент = Сантимент.toLowerCase(); 
    Сантимент = Сантимент.replace(/\s/g, '');
    
    if (Сантимент === Сантимент.split('').reverse().join('')) {
        console.log(`Слово ${Сантимент} является палиндромом`);
    } 
    else { 
        console.log(`Слово ${Сантимент} не является палиндромом`);
    }
}

let Сантимент = "Сантимент";
isPalindrome(Сантимент);
