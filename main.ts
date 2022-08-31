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
    earthquaking = true
    strip.clear()
    strip.show()
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Sine,
    912,
    717,
    255,
    255,
    5000,
    SoundExpressionEffect.Warble,
    InterpolationCurve.Curve
    ), SoundExpressionPlayMode.InBackground)
    for (let value of list) {
        strip.setPixelColor(value, neopixel.colors(NeoPixelColors.Red))
    }
    for (let index = 0; index < 15; index++) {
        strip.rotate(1)
        strip.show()
        basic.pause(150)
        strip.rotate(-1)
        strip.show()
        basic.pause(150)
    }
    strip.clear()
    strip.show()
    earthquaking = false
})
let list: number[] = []
let strip: neopixel.Strip = null
let earthquaking = false
music.setVolume(255)
earthquaking = false
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
list = [
0,
2,
4,
6,
8,
10,
12,
14
]
let flipper = true
strip.setBrightness(150)
loops.everyInterval(250, function () {
    if (!(earthquaking)) {
        if (input.logoIsPressed()) {
            strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        }
        strip.shift(1)
        strip.show()
    }
})
