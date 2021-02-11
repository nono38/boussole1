input.onButtonPressed(Button.A, function () {
    if (gjmyy == 0) {
        basic.showString("VA DANS LE SALON AU NORD OUEST")
        gjmyy = 1
    } else {
        basic.showString("VA DANS LA CHAMBRE EST AU SE")
    }
})
input.onButtonPressed(Button.B, function () {
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
            if (engle > 157.5 && engle < 202.5) {
                basic.showString("S")
            } else {
                if (engle > 202.5 && engle < 247.5) {
                    basic.showString("SO")
                } else {
                    if (engle > 247.5 && engle < 292.5) {
                        basic.showString("O")
                    } else {
                        if (engle > 292.5 && engle < 337.5) {
                            basic.showString("NO")
                        }
                    }
                }
            }
        }
    }
})
let engle = 0
let gjmyy = 0
gjmyy = 0
basic.forever(function () {
	
})
