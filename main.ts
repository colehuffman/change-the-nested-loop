let x = 0
let y = 0
input.onGesture(Gesture.Shake, function () {
    x = -1
    while (x <= 4) {
        while (y <= 4) {
            y += 1
            led.plot(y, x)
            basic.pause(100)
        }
        x += 1
        y = -1
    }
})
