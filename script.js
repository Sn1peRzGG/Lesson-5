const prompt = require('prompt-sync')()

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

console.log(
	compare_number(
		prompt('Введіть перше число: '),
		prompt('Введіть друге число: ')
	)
)

//! 1.2

function verify_pass(password) {
	if (password.length >= 8 && password.length <= 16) {
		return 'Пароль підходить!'
	} else {
		return 'Пароль не підходить!'
	}
}

console.log(verify_pass(prompt('Введіть пароль: ')))

//! 1.3

function checkEvenOdd(number) {
	if (number % 2 === 0) {
		return `Число ${inputNumber} парне!`
	} else {
		return `Число ${inputNumber} непарне!`
	}
}

console.log(checkEvenOdd(parseInt(prompt('Введіть число: '))))

//! 2.1

const isLeapYear = year =>
	(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

const inputYear = parseInt(prompt('Введіть рік: '))

console.log(
	`${inputYear} - ${
		isLeapYear(inputYear) ? 'високосний' : 'не високосний'
	} рік.`
)
