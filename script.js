const plus = (a, b) => a + b
const minus = (a, b) => a - b
const umnojeneie = (a, b) => a * b
const delenie = (a, b) => a / b

let oper = ''
let s = ''
document.querySelectorAll('button').forEach(el => {
    el.addEventListener('click', () => {
        s = s + el.innerHTML
        document.getElementById('ekran').innerHTML = s
        if (el.innerHTML == '+' || el.innerHTML == '-' || el.innerHTML == '*' || el.innerHTML == '/') { oper = el.innerHTML }
    })
})

document.getElementById('equal').addEventListener('click', () => {
    let number = s.replace('=', '').split(oper)
    if (isNaN(plus(+number[0], number[1]))) {
        document.getElementById('ekran').innerHTML = 'Правильно пишите задачу'
    } else if (oper == '+') {
        document.getElementById('ekran').innerHTML = plus(+number[0], +number[1])
    } else if (oper == '-') {
        document.getElementById('ekran').innerHTML = minus(+number[0], +number[1])
    } else if (oper == '*') {
        document.getElementById('ekran').innerHTML = umnojeneie(+number[0], +number[1])
    } else if (oper == '/') {
        document.getElementById('ekran').innerHTML = delenie(+number[0], +number[1])
    }
})

document.getElementById('delete').addEventListener('click', () => {
    s = ''
    document.getElementById('ekran').innerHTML = s
})