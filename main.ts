let y = 0
let x = 0
// Runs code when microbit is shaken
input.onGesture(Gesture.Shake, function () {
    // sets y to -1 so that it plots the point 0 when increased by 1.
    y = -1
    // runs inside code while y is less than or equal to 4
    while (y <= 4) {
        // only runs contained code while x is less than or equal to 4
        while (x <= 4) {
            // plots (x,y) on the 5x5 led pad
            led.plot(x, y)
            // increases x by 1
            x += 1
            // pauses for 100ms so that viewer can see the order that the led panel is filled in
            basic.pause(100)
        }
        // sets x to -1 so that it plots the point 0 when increased by 1
        x = -1
        // increases y by 1
        y += 1
    }
})
