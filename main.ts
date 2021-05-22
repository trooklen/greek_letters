function show_greek_minima () {
    count = minima.length
    metritis = 0
    for (let index = 0; index < count; index++) {
        letter = minima.charAt(metritis)
        show_greek_letter()
        basic.pause(500)
        metritis += 1
    }
}
function show_greek_letter () {
    if (letter == "C") {
        basic.showLeds(`
            # . # . #
            # . # . #
            . # # # .
            . . # . .
            . . # . .
            `)
    } else {
        if (letter == "Y") {
            basic.showLeds(`
                # . . . #
                # . . . #
                . # # # .
                . . # . .
                . . # . .
                `)
        } else {
            if (letter == "X") {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            } else {
                if (letter == "A") {
                    basic.showLeds(`
                        . # # # .
                        # . . . #
                        # . . . #
                        # # # # #
                        # . . . #
                        `)
                } else {
                    if (letter == "G") {
                        basic.showLeds(`
                            # # # # #
                            # . . . .
                            # . . . .
                            # . . . .
                            # . . . .
                            `)
                    } else {
                        if (letter == "W") {
                            basic.showLeds(`
                                . # # # .
                                # . . . #
                                # . . . #
                                . # . # .
                                # # . # #
                                `)
                        } else {
                            if (letter == "I") {
                                basic.showLeds(`
                                    . # # # .
                                    . . # . .
                                    . . # . .
                                    . . # . .
                                    . # # # .
                                    `)
                            } else {
                                if (letter == " ") {
                                    basic.showLeds(`
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        `)
                                } else {
                                    if (letter == "T") {
                                        basic.showLeds(`
                                            # # # # #
                                            . . # . .
                                            . . # . .
                                            . . # . .
                                            . . # . .
                                            `)
                                    } else {
                                        if (letter == "H") {
                                            basic.showLeds(`
                                                # . . . #
                                                # . . . #
                                                # # # # #
                                                # . . . #
                                                # . . . #
                                                `)
                                        } else {
                                            if (letter == "S") {
                                                basic.showLeds(`
                                                    # # # # #
                                                    . # . . .
                                                    . . # . .
                                                    . # . . .
                                                    # # # # #
                                                    `)
                                            } else {
                                                if (letter == "M") {
                                                    basic.showLeds(`
                                                        # . . . #
                                                        # # . # #
                                                        # . # . #
                                                        # . . . #
                                                        # . . . #
                                                        `)
                                                } else {
                                                    if (letter == "P") {
                                                        basic.showLeds(`
                                                            # # # # #
                                                            # . . . #
                                                            # . . . #
                                                            # . . . #
                                                            # . . . #
                                                            `)
                                                    } else {
                                                        if (letter == "K") {
                                                            basic.showLeds(`
                                                                # . . # .
                                                                # . # . .
                                                                # # . . .
                                                                # . # . .
                                                                # . . # .
                                                                `)
                                                        } else {
                                                            if (letter == "O") {
                                                                basic.showLeds(`
                                                                    . # # # .
                                                                    # . . . #
                                                                    # . . . #
                                                                    # . . . #
                                                                    . # # # .
                                                                    `)
                                                            } else {
                                                                if (letter == "B") {
                                                                    basic.showLeds(`
                                                                        # # # . .
                                                                        # . . # .
                                                                        # # # . .
                                                                        # . . # .
                                                                        # # # . .
                                                                        `)
                                                                } else {
                                                                    if (letter == "D") {
                                                                        basic.showLeds(`
                                                                            . # # # .
                                                                            # . . . #
                                                                            # . . . #
                                                                            # . . . #
                                                                            # # # # #
                                                                            `)
                                                                    } else {
                                                                        if (letter == "E") {
                                                                            basic.showLeds(`
                                                                                # # # # #
                                                                                # . . . .
                                                                                # # # # .
                                                                                # . . . .
                                                                                # # # # #
                                                                                `)
                                                                        } else {
                                                                            if (letter == "Z") {
                                                                                basic.showLeds(`
                                                                                    # # # # #
                                                                                    . . . # .
                                                                                    . . # . .
                                                                                    . # . . .
                                                                                    # # # # #
                                                                                    `)
                                                                            } else {
                                                                                if (letter == "8") {
                                                                                    basic.showLeds(`
                                                                                        . # # # .
                                                                                        # . . . #
                                                                                        # # # # #
                                                                                        # . . . #
                                                                                        . # # # .
                                                                                        `)
                                                                                } else {
                                                                                    if (letter == "L") {
                                                                                        basic.showLeds(`
                                                                                            . # # # .
                                                                                            # . . . #
                                                                                            # . . . #
                                                                                            # . . . #
                                                                                            # . . . #
                                                                                            `)
                                                                                    } else {
                                                                                        if (letter == "N") {
                                                                                            basic.showLeds(`
                                                                                                # . . . #
                                                                                                # # . . #
                                                                                                # . # . #
                                                                                                # . . # #
                                                                                                # . . . #
                                                                                                `)
                                                                                        } else {
                                                                                            if (letter == "3") {
                                                                                                basic.showLeds(`
                                                                                                    # # # # #
                                                                                                    . . . . .
                                                                                                    . # # # .
                                                                                                    . . . . .
                                                                                                    # # # # #
                                                                                                    `)
                                                                                            } else {
                                                                                                if (letter == "R") {
                                                                                                    basic.showLeds(`
                                                                                                        # # # # .
                                                                                                        # . . . #
                                                                                                        # . . . #
                                                                                                        # # # # .
                                                                                                        # . . . .
                                                                                                        `)
                                                                                                } else {
                                                                                                    if (letter == "F") {
                                                                                                        basic.showLeds(`
                                                                                                            . # # # .
                                                                                                            # . # . #
                                                                                                            # . # . #
                                                                                                            . # # # .
                                                                                                            . . # . .
                                                                                                            `)
                                                                                                    } else {
                                                                                                    	
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
let metritis = 0
let count = 0
let minima = ""
let letter = ""
letter = ""
minima = "TO PAIXNIDI EINAI TELEIO"
show_greek_minima()
