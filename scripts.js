// Задание 1 
console.log('Задание 1')

let str='aaa@bbb@ccc'
console.log('Итог замены: '+str.replace(/@/g, '!'))

// Задание 2
console.log('')
console.log('Задание 2')

let date ='2025-12-31'
console.log('Исходный формат: '+date)
console.log('Результат: '+date.split('-').reverse().join('/'))

// Задание 3
console.log('')
console.log('Задание 3')

str='Я учу javascript!'
console.log('Способ 1: substr')
console.log(str.substr(2,3))
console.log(str.substr(6,10))
console.log('Способ 2: substring')
console.log(str.substring(2,5))
console.log(str.substring(6,16))
console.log('Способ 3: slice')
console.log(str.slice(2,5))
console.log(str.slice(6,16))

// Задание 4
console.log('')
console.log('Задание 4')

let arr=[4, 2, 5, 19, 13, 0, 10]
let sum=0
for (let i=0; i<arr.length; i++) {
    sum+=Math.pow(arr[i], 3)
}
console.log('Квадратный корень из суммы кубов элементов массива = '+Math.sqrt(sum))

// Задание 5
console.log('')
console.log('Задание 5')

let a=3, b=5, c=Math.abs(a-b);
console.log('Модуль разности чисел '+a+' и '+b+' = '+c)

// Задание 6
console.log('')
console.log('Задание 6')

let dateNow = new Date
function zero(n) {
    if (n<10) return '0'+n
    else return n
}
console.log(dateNow.getHours()+':'+dateNow.getMinutes()+':'+dateNow.getSeconds()+' '+zero(dateNow.getDate())+'.'+zero(dateNow.getMonth()+1)+'.'+dateNow.getFullYear());

// Задание 7
console.log('')
console.log('Задание 7')

str='aa aba abba abbba abca abea'
console.log(str.match(/ab+a/g))

// Задание 8
console.log('')
console.log('Задание 8')

let phoneNumber = '+375-25-7894561'
let reg=/\+375(\s|\-)[0-9]{2}(\s|\-)[0-9]{7}/g
function checkPhone(k) {
    return reg.test(k)
}
console.log(checkPhone(phoneNumber))