def on_button_pressed_a():
    basic.show_leds("""
        . . . . .
                . . . . .
                # # # . .
                # . # . .
                # # # . .
    """)
    basic.show_leds("""
        . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
    """)
    basic.show_leds("""
        # # # . .
                # . # . .
                # # # . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . # . . .
                # . # . .
                . # . . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        # . # . .
                . . . . .
                # . # . .
                . . . . .
                . . . . .
    """)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    for index in range(2):
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . #
                        . . . . .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . # #
                        . . . . .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . .
                        . . # . .
                        . . . # #
                        . . . . .
                        . . . . .
        """)
        basic.show_leds("""
            . . # . .
                        . . # . .
                        . . . # #
                        . . . . .
                        . . . . .
        """)
        basic.show_leds("""
            . . # . .
                        . . # . .
                        . . . # .
                        . . . . .
                        . . . . .
        """)
        basic.show_leds("""
            . . # . .
                        . . # . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        basic.show_leds("""
            . . # . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        basic.clear_screen()
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
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
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

list2: List[number] = []
strip: neopixel.Strip = None
earthquaking = False
music.set_volume(255)
earthquaking = False
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
list2 = [0, 2, 4, 6, 8, 10, 12, 14]
flipper = True
strip.set_brightness(150)

def on_every_interval():
    if not (earthquaking):
        if input.button_is_pressed(Button.AB):
            strip.set_pixel_color(1, neopixel.colors(NeoPixelColors.RED))
        strip.shift(1)
        strip.show()
loops.every_interval(250, on_every_interval)
