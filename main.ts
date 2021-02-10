let engle = 0
input.onButtonPressed(Button.A, function () {
    engle = input.compassHeading()
    if (engle > 337.5 && engle < 359) {
        basic.showString("N")
    } else if (engle > 22.5 && engle < 67.5) {
        basic.showString("NE")
    } else if (engle > 67.5 && engle < 112.5) {
        basic.showString("E")
    } else if (engle > 112.5 && engle < 157.5) {
        basic.showString("SE")
    } else {
        if (engle > 0 && engle < 22.5) {
            basic.showString("N")
        } else {
        	
        }
    }
})
basic.forever(function () {
	
})
