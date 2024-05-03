const prompt = require('prompt-sync')()
console.log('Hello!')

//! 1.1

function compare_number(num1, num2) {
	if (num1 > num2) {
		return `Число ${num1} більше!`
	} else if (num2 > num1) {
		return `Число ${num2} більше!`
	} else if (num1 == num2) {
		return 'Числа однакові!'
	} else {
		return 'Помилка!'
	}
}

const num1 = prompt('Введіть перше число: ')
const num2 = prompt('Введіть друге число: ')

const comparisonResult = compare_number(num1, num2)
console.log(comparisonResult)

//! 1.2

function verify_pass(password) {
	if (password.length >= 8 && password.length <= 16) {
		return 'Пароль підходить!'
	} else {
		return 'Пароль не підходить!'
	}
}

const password = prompt('Введіть пароль: ')

const verifyPassword = verify_pass(password)
console.log(verifyPassword)

//! 1.3

function checkEvenOdd(number) {
	if (number % 2 === 0) {
		return `Число ${inputNumber} парне!`
	} else {
		return `Число ${inputNumber} непарне!`
	}
}

const inputNumber = parseInt(prompt('Введіть число: '))

const result = checkEvenOdd(inputNumber)
console.log(result)

//! 2.1

function isLeapYear(year) {
	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
		return true
	} else {
		return false
	}
}

const inputYear = parseInt(prompt('Введіть рік: '))

if (isLeapYear(inputYear)) {
	console.log(`${inputYear} - високосний рік.`)
} else {
	console.log(`${inputYear} - не високосний рік.`)
}
