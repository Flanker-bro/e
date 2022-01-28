input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showString("Superidol ")
    basic.showLeds(`
        . # . # .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showString("Error")
    basic.clearScreen()
    basic.showString("How did you get here")
    basic.clearScreen()
    basic.showString("Turn me off then turn me back on")
    basic.clearScreen()
    basic.showString("Go")
    basic.clearScreen()
    basic.showString("Why are still here")
    basic.clearScreen()
    basic.showString("Fine I will turn off myself")
    for (let index = 0; index < 10000000000000; index++) {
        basic.clearScreen()
    }
    basic.showString("Error")
    basic.clearScreen()
    basic.clearScreen()
    basic.clearScreen()
    basic.clearScreen()
    basic.clearScreen()
    basic.showString("What you don't trust me")
    basic.showString("If I make a song will you leave")
    music.playMelody("- - - G D F - C ", 120)
    basic.showString("There")
    basic.clearScreen()
    basic.showString("Happy")
    basic.clearScreen()
    basic.showString("Go back")
    basic.clearScreen()
    basic.showString("Congrats ")
    basic.clearScreen()
    basic.showString("On make it this far")
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        # . . . .
        # # # # #
        `)
    basic.clearScreen()
    basic.showString("Now  stop")
    basic.clearScreen()
    basic.showString("Bruh Stop ")
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showString("Want to play a game")
    basic.clearScreen()
    basic.showString("Ok")
    basic.clearScreen()
    basic.showLeds(`
        . # # # .
        # # . . #
        # . # . #
        # . . # #
        . # # # .
        `)
    basic.clearScreen()
    basic.showString("Game time!")
    basic.clearScreen()
    basic.showString("Pick a numbers ")
    basic.clearScreen()
    game.addLife(2)
    basic.showString("" + (Math.randomBoolean()))
    basic.clearScreen()
    basic.showString("")
    if (true) {
        basic.showString("You win")
        game.addScore(1)
    } else {
        basic.showString("You lose")
        game.removeLife(1)
        basic.clearScreen()
    }
    game.pause()
    basic.showString("Did you win?")
    basic.clearScreen()
    basic.showString("Let's continue ")
    basic.clearScreen()
    game.resume()
    basic.showString("" + (Math.randomBoolean()))
    if (true) {
        basic.showString("You lose")
        game.removeLife(1)
        basic.clearScreen()
    } else {
        basic.showString("You win")
        game.addScore(2)
        basic.clearScreen()
    }
    basic.showString("GG")
    game.gameOver()
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showString("I can't see")
    basic.clearScreen()
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showString("Turn it down it is so loud")
    basic.clearScreen()
    basic.showString("I am studying ")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Can't make chose")
    basic.clearScreen()
    basic.showString("Ok dice time")
    basic.clearScreen()
    basic.showString("1or2")
    basic.showNumber(randint(1, 2))
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Ghost)
    basic.showString("I am a ghost")
    basic.showString("Don't blow me away")
    for (let index = 0; index < 4; index++) {
        if (true) {
            Col = randint(0, 4)
            Row = randint(0, 4)
        }
        if (led.point(Col, Row)) {
            led.unplot(Col, Row)
            led.plot(Col + 1, Row)
        }
    }
    basic.showString(".. / -.-. .- -. / .----. - / .... . .-.. .--. / .. / .. -. / .... . .-. . / - --- --- / --..-- .. / -.-. .- -. / --- -. .-.. -.-- / - .- .-.. -.- / --- -. / - .... . / .. -. - . .-. -. . - / .. / -.-. .- -. .----. - / --. . - / --- ..- -")
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showString("You want meme")
    basic.clearScreen()
    basic.showString("You stupid ")
    basic.clearScreen()
    basic.showString("No i am not")
    basic.clearScreen()
    basic.showString("Then what,What's 9+10")
    basic.clearScreen()
    basic.showNumber(9 + 10)
    basic.showString("21")
    basic.showString("" + (images.iconImage(IconNames.Happy)))
    basic.clearScreen()
    basic.showString("Want another meme")
    basic.clearScreen()
    basic.showString("" + (images.createImage(`
        . # # # .
        # # . . #
        # # # # .
        # # # # .
        . # . # .
        `)))
    basic.clearScreen()
    basic.showString("" + (images.iconImage(IconNames.Happy)))
})
let Row = 0
let Col = 0
basic.showString("Hello!")
basic.showLeds(`
    . . . . .
    . # . # .
    # . # . #
    . # . # .
    . . # . .
    `)
basic.pause(100)
basic.showIcon(IconNames.Heart)
basic.clearScreen()
music.ringTone(294)
music.ringTone(330)
music.ringTone(494)
music.playMelody("F E D C D - F - ", 120)
music.setVolume(255)
basic.clearScreen()
basic.showString("Shake the mircobit to play a game")
basic.clearScreen()
