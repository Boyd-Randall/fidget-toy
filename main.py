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
        . . # # #
        . . # . #
        . . # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . # . #
        . . . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . #
        . . . . .
        . . # . #
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Triangle,
    74,
    1,
    255,
    78,
    5000,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.UntilDone)
    for (let value of Strip_length) {
        if (flipper) {
            strip.setPixelColor(value, neopixel.colors(NeoPixelColors.Red))
        }
    }
})
let Strip_length: number[] = []
let flipper = false
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
flipper = true
Strip_length = [strip.length()]
strip.setBrightness(150)
loops.everyInterval(250, function () {
    if (input.logoIsPressed()) {
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    }
    strip.shift(1)
    strip.show()
})
