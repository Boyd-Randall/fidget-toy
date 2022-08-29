input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        # . # . .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # . .
        # . # . .
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        # . # . .
        . # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . # . .
        . . . . .
        # . # . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . . # . #
        . . # # #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # . .
        # . # . .
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        # . # . .
        . # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . # . .
        . . . . .
        # . # . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.setBrightness(150)
loops.everyInterval(250, function () {
    strip.shift(1)
    strip.show()
})
