let prediction = ""
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
