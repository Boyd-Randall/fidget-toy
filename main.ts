function Bpress () {
    if (!(Playing_A)) {
        Playing_B = true
        while (Playing_B) {
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
    }
}
function earthquake () {
    earthquaking = true
    strip.clear()
    strip.show()
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 700, 700, 255, 255, 5000, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.InBackground)
    for (let value of list2) {
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
}
function Apress () {
    if (!(Playing_B)) {
        Playing_A = true
        while (Playing_A) {
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
    }
}
let Flowfunctioning = false
let Playing_B = false
let Playing_A = false
let list2: number[] = []
let strip: neopixel.Strip = null
let earthquaking = false
music.setVolume(255)
earthquaking = false
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
list2 = [
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
basic.forever(function () {
    basic.pause(275)
})
loops.everyInterval(250, function () {
    if (!(earthquaking)) {
        while (input.buttonIsPressed(Button.AB)) {
            Flowfunctioning = true
            strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
            basic.clearScreen()
            led.stopAnimation()
            basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                `, 63)
basic.showLeds(`
                    . . . . .
                    . . # . .
                    # # # # #
                    . . . . .
                    . . . . .
                `, 63)
basic.showLeds(`
                            . . # . .
                            . . # . .
                            # # # # #
                            . . . . .
                            . . . . .
                                `, 63)
basic.showLeds(`
                            . . # . .
                            . . . . .
                            # # # # #
                            . . . . .
                            . . . . .
                                `, 63)
strip.shift(1)
            strip.show()
        }
        Flowfunctioning = false
        basic.clearScreen()
    }
    if (input.buttonIsPressed(Button.B)) {
        led.stopAnimation()
        Bpress()
    } else if (input.buttonIsPressed(Button.A)) {
        led.stopAnimation()
        Apress()
    } else if (input.isGesture(Gesture.Shake)) {
        led.stopAnimation()
        earthquake()
    }
})
loops.everyInterval(250, function () {
    if (!(Flowfunctioning)) {
        strip.shift(1)
        strip.show()
    }
})
