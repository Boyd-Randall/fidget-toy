function Lavaflow () {
    if (!(earthquaking)) {
        if (input.buttonIsPressed(Button.AB)) {
            while (input.buttonIsPressed(Button.AB)) {
                strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
                basic.clearScreen()
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
                strip.shift(1)
                strip.show()
            }
            basic.clearScreen()
        }
        strip.shift(1)
        strip.show()
    }
}
input.onButtonPressed(Button.A, function () {
    if (!(Playing_B)) {
        Playing_A = true
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . . . .
                . . # . .
                # # # # .
                . . # . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . # .
                # # # . #
                . . . # .
                . . . . .
                `)
        }
        basic.clearScreen()
        Playing_A = false
    }
})
input.onButtonPressed(Button.B, function () {
    if (!(Playing_A)) {
        Playing_B = true
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # #
                . . # . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . # . . .
                # . # # #
                . # . . .
                . . . . .
                `)
        }
        basic.clearScreen()
        Playing_B = false
    }
})
input.onGesture(Gesture.Shake, function () {
    earthquaking = true
    strip.clear()
    strip.show()
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Sine,
    700,
    700,
    255,
    255,
    5000,
    SoundExpressionEffect.Warble,
    InterpolationCurve.Logarithmic
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
let Playing_B = false
let Playing_A = false
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
Playing_A = false
Playing_B = false
strip.setBrightness(150)
loops.everyInterval(250, function () {
	
})
