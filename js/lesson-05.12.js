// /1. Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"
// const inputValue = prompt("Какое официальное название JavaScript?");
// const validAnswer = "ECMAScript";

// if (inputValue === validAnswer) {
//   alert("Верно!");
// } else {
//   console.log(`Не знаете? ${validAnswer}!`);
// }

// Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Выведите в консоль всех четных чисел от min до max

// const min = 5;
// const max = 20;

// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 === 0) {
//     console.log(`четные числа: ${i}`);
//   }
// }

//2. Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// const inputNumber = prompt("Enter minutes");
// const inputNumber = 2000;
// const hours = Math.floor(inputNumber / 60);
// console.log(hours);
// const minutes = inputNumber % 60;
// console.log(minutes);

// const digitHours = String(hours).padStart(2, 0);
// const digitMinutes = String(minutes).padStart();

// Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести строку "Отменено"
//В противном случае вывести строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// const inputValue = prompt("Please, enter the password");
// console.log(inputValue);

// const adminValue = "Админ";
// let password = "";

// if (inputValue === adminValue) {
//   password = prompt("password");
//   if ((password = "Я главный")) {
//     console.log("Здравствуйте!");
//   } else {
//     console.log("Неверный пароль!");
//   }
// } else if (inputValue === null) {
//   console.log("Отменено");
// } else {
//   console.log("Я вас не знаю");
// }

// При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к значению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
//кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.

// Напишите цикл, который предлагает ввести
// число больше 100 через prompt.
//Если если посетитель ввёл другое число - попросить
//ввести ещё раз и так далее.
//Цикл должен спрашивать число, пока посетитель не
//введёт число больше 100, либо не нажмет кнопку
//Отмена в prompt
// let value;
// do {
//   value = prompt("Enter number 100");
//   console.log(value);
// } while (value <= 100 && value);

// console.log(value);

// let inputValue;

// do {
//   inputValue = prompt("Enter a number");
//   console.log(inputValue);
// } while (inputValue < 100);
