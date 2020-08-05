let prediction = ""
input.onButtonPressed(Button.A, function () {
    serial.writeLine("mb-tx")
})
basic.forever(function () {
    prediction = serial.readLine()
    basic.showString(prediction)
})
