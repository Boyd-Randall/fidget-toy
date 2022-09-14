def Bpress():
    global Playing_B
    if not (Playing_A):
        Playing_B = True
        while Playing_B:
            for index in range(2):
                basic.show_leds("""
                    . . . . .
                                        . . # . .
                                        . # # # #
                                        . . # . .
                                        . . . . .
                """)
                basic.show_leds("""
                    . . . . .
                                        . # . . .
                                        # . # # #
                                        . # . . .
                                        . . . . .
                """)
            basic.clear_screen()
            Playing_B = False
def earthquake():
    global earthquaking
    earthquaking = True
    strip.clear()
    strip.show()
    music.play_sound_effect(music.create_sound_effect(WaveShape.SINE,
            700,
            700,
            255,
            255,
            5000,
            SoundExpressionEffect.WARBLE,
            InterpolationCurve.LOGARITHMIC),
        SoundExpressionPlayMode.IN_BACKGROUND)
    for value in list2:
        strip.set_pixel_color(value, neopixel.colors(NeoPixelColors.RED))
    for index2 in range(15):
        strip.rotate(1)
        strip.show()
        basic.pause(150)
        strip.rotate(-1)
        strip.show()
        basic.pause(150)
    strip.clear()
    strip.show()
    earthquaking = False
def Apress():
    global Playing_A
    if not (Playing_B):
        Playing_A = True
        while Playing_A:
            for index3 in range(2):
                basic.show_leds("""
                    . . . . .
                                        . . # . .
                                        # # # # .
                                        . . # . .
                                        . . . . .
                """)
                basic.show_leds("""
                    . . . . .
                                        . . . # .
                                        # # # . #
                                        . . . # .
                                        . . . . .
                """)
            basic.clear_screen()
            Playing_A = False
Playing_B = False
Playing_A = False
list2: List[number] = []
strip: neopixel.Strip = None
earthquaking = False
music.set_volume(255)
earthquaking = False
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
list2 = [0, 2, 4, 6, 8, 10, 12, 14]
Playing_A = False
Playing_B = False
Flowfunctioning = False
strip.set_brightness(150)

def on_forever():
    basic.pause(275)
basic.forever(on_forever)

def on_every_interval():
    global Flowfunctioning
    if not (earthquaking):
        while input.button_is_pressed(Button.AB):
            Flowfunctioning = True
            strip.set_pixel_color(1, neopixel.colors(NeoPixelColors.RED))
            basic.clear_screen()
            led.stop_animation()
            basic.show_leds("""
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                """,
                63)
            basic.show_leds("""
                    . . . . .
                    . . # . .
                    # # # # #
                    . . . . .
                    . . . . .
                """,
                63)
            basic.show_leds("""
                            . . # . .
                            . . # . .
                            # # # # #
                            . . . . .
                            . . . . .
                                """,
                                63)
            basic.show_leds("""
                            . . # . .
                            . . . . .
                            # # # # #
                            . . . . .
                            . . . . .
                                """,
                                                                63)
            
            strip.shift(1)
            strip.show()
        Flowfunctioning = False
        basic.clear_screen()
    if input.button_is_pressed(Button.B):
        led.stop_animation()
        Bpress()
    elif input.button_is_pressed(Button.A):
        led.stop_animation()
        Apress()
    elif input.is_gesture(Gesture.SHAKE):
        led.stop_animation()
        earthquake()
loops.every_interval(250, on_every_interval)

def on_every_interval2():
    if not (Flowfunctioning):
        strip.shift(1)
        strip.show()
loops.every_interval(250, on_every_interval2)
