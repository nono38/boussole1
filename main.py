engle = 0

def on_button_pressed_a():
    global engle
    engle = input.compass_heading()
    if engle < 22.5:
        basic.show_string("N")
    else:
        if engle < 45 and engle > 22.5:
            basic.show_string("NE")
        else:
            if engle > 45 and engle < 67.5:
                basic.show_string("E")
            else:
                if engle > 67.5 and engle < 135:
                    basic.show_string("SE")
                else:
                    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    pass
basic.forever(on_forever)
