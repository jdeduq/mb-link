let prediction = ""
basic.forever(function () {
    basic.pause(2000)
    prediction = serial.readLine()
    basic.showString(prediction)
})
