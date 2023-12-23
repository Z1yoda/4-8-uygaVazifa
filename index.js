// 1-masala massiv ichida berilgan qiymatni qidiradigan bor bo'lsa index^2 else "mavjud emas"
console.log("1-masala");

let array = [34, "world", 78, "salom", true];

function indexOfTest(array) {
  let index = array.indexOf("saloma");

  if (index != -1) {
    return (index = index ** 2);
  } else {
    return "Mavjud emas";
  }
}

console.log(indexOfTest(array));

// 2-masala 3 ta massivni birlashtiradigan 2-sini boshiga 1-sini o'rtasiga joylashtiradigan funksiya yozing (concat)
console.log("2-masala");

let arr1 = [5, 6, 7, 8];
let arr2 = [1, 2, 3, 4];
let arr3 = [9, 10, 11, 12];

function newMassive(arg1, arg2, arg3) {
  let arr4 = arg2.concat(arg1, arg3);
  return arr4;
}

console.log(newMassive(arr1, arr2, arr3));

// 3-masala massivdan shartga mos dastlabki elementning kvadratini qaytaradigan funksiya yozing (find)
console.log("3-masala");

let massiv = [9, 8, 7, 6, 5, 4, 3];

let a = massiv.find((value, index, massiv) => {
  let b = value < 5;
  return b ** 2;
});

console.log(a);

// 4-masala sonlardan tashkil topgan massiv elementlari orasidan toqlarini sonini topuvchi funksiya yozing (foreach)
console.log("4-masala");

let massive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count = 0;

massive.forEach((value) => {
  if (value % 2 != 0) {
    count += 1;
  }
});

console.log(count);

// 5-masala so'zlardan tashkil topgan massivni ohirgi harfidan iborat yangi massiv hosil qiladigan funksiya yozing
console.log("5-masala");

let words = ["hello", "salom", "olma", "world"];
let newWord = [];

words.forEach((value, index) => {
  let last = value[value.length - 1];
  newWord.push(last);
});

console.log(newWord);

// 6-masala massiv elementlari orasidan tub sonlar yigindisini topuvchi funksiya tuzing (forOf)
console.log("6-masala");

let numarray = [2, 3, 4, 5, 6, 7, 11]; //28

function primeArray(arg) {
  let counter = 0;

  for (let i = 1; i <= arg; i++) {
    if (arg % i == 0) {
      counter++;
    }
  }

  if (counter == 2) {
    return true;
  } else {
    return false;
  }
}

function tubSum(arg) {
  let sum = 0;
  for (const value of arg) {
    if (primeArray(value)) {
      sum += value;
    }
  }
  return sum;
}

console.log("Tub sonlar yigindisi: ", tubSum(numarray));
