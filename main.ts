input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    Tello.forward_flip()
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(100)
})
input.onGesture(Gesture.TiltRight, function () {
    Tello.right(50)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.pause(100)
})
input.onButtonPressed(Button.A, function () {
    distanse += -10
    basic.showString("" + (distanse))
})
input.onGesture(Gesture.TiltLeft, function () {
    Tello.left(50)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.pause(100)
})
input.onGesture(Gesture.LogoUp, function () {
    Tello.back(50)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    basic.pause(100)
})
input.onGesture(Gesture.LogoDown, function () {
    Tello.forward(50)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.pause(100)
})
input.onButtonPressed(Button.AB, function () {
    if (Tello.getflying()) {
        Tello.land()
        basic.showLeds(`
            . # # # .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else {
        Tello.takeoff()
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    distanse += 10
    basic.showString("" + (distanse))
})
let distanse = 0
Tello.radiosetgroup(101)
distanse = 30
basic.forever(function () {
    if (30 < dronecontroller.getright_X()) {
        Tello.rotate_cw(90)
        basic.showLeds(`
            # # # # .
            . . . # .
            . . . # .
            . . # # #
            . . . # .
            `)
        basic.pause(500)
    }
    if (dronecontroller.getright_X() < -30) {
        Tello.rotate_ccw(90)
        basic.showLeds(`
            . # # # #
            . # . . .
            . # . . .
            # # # . .
            . # . . .
            `)
        basic.pause(500)
    }
    if (30 < dronecontroller.getleft_Y()) {
        Tello.up(20)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(500)
    }
    if (dronecontroller.getleft_Y() < -30) {
        Tello.down(20)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(500)
    }
})
