let prediction = ""
input.onButtonPressed(Button.A, function () {
    serial.writeLine("Button A pressed")
    basic.showString("A")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("Button B pressed")
    basic.showString("B")
    basic.clearScreen()
})
basic.forever(function () {
    prediction = serial.readLine()
    if (prediction == "Go") {
        basic.showIcon(IconNames.Yes)
    } else {
        if (prediction == "No Go") {
            basic.showIcon(IconNames.No)
        } else {
            basic.showString("e")
        }
    }
    basic.clearScreen()
})
