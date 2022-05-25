input.onButtonPressed(Button.A, function () {
    if (Symbol != 0) {
        IS_twice = 0
        Symbol += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    IS_twice += 1
    if (IS_twice == 2) {
        basic.showString(Sentence)
        IS_twice = 0
    }
    if (IS_twice == 1) {
        Sentence = "" + Sentence + Letter
    }
})
input.onButtonPressed(Button.B, function () {
    if (Symbol != ABC.length) {
        IS_twice = 0
        Symbol += 1
    }
})
let Letter = ""
let Sentence = ""
let IS_twice = 0
let Symbol = 0
let ABC = ""
// Choose your alphabet by changing this variable and the program will do the rest.
ABC = "abcdefghijklmnopqrstuvwxyz"
Symbol = 0
IS_twice = 0
basic.forever(function () {
    if (IS_twice != 2) {
        Letter = ABC.substr(Symbol, 1)
        basic.showString(Letter)
    }
})
