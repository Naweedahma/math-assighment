input.onButtonPressed(Button.A, function () {
    numbers += 1
    basic.showNumber(numbers)
})
input.onButtonPressed(Button.AB, function () {
    A = numbers + 9
    B = numbers - -9
    C = numbers ** 2
    D = numbers / 3
    E = 0 % 4
    F = Math.sqrt(numbers)
    G = Math.round(3 / 4)
    H = Math.ceil(3 / 9)
    I = numbers ** 3
    J = randint(0, 100)
})
input.onButtonPressed(Button.B, function () {
    numbers += -1
    basic.showNumber(numbers)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(A)
    basic.showNumber(B)
    basic.showNumber(C)
    basic.showNumber(D)
    basic.showNumber(E)
    basic.showNumber(F)
    basic.showNumber(G)
    basic.showNumber(H)
    basic.showNumber(I)
    basic.showNumber(J)
})
let J = 0
let I = 0
let H = 0
let G = 0
let F = 0
let E = 0
let D = 0
let C = 0
let B = 0
let A = 0
let numbers = 0
numbers = 0
basic.forever(function () {
	
})
