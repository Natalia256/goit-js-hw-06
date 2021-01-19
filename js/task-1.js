import users from "./users.js";

// Задание 1. Получить массив имен всех пользователей (поле name).

const getUserNames = users.flatMap (item => item.name);

console.log(getUserNames);
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
