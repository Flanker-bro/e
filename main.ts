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
    basic.showString("I think you broke me")
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
    basic.showString("" + (images.createBigImage(`
        . . . . # . . . . .
        . . . . # . . . . .
        . . . . # . . . . .
        . . # # # # # . . .
        . . # # # # # # # .
        `)))
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
	
})
input.onGesture(Gesture.Shake, function () {
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
    basic.showString("Chose one or two")
    basic.clearScreen()
    basic.showString("" + (Math.randomBoolean()))
    if (true) {
        basic.showString("You win")
        game.addScore(1)
        basic.clearScreen()
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
basic.showString("Hello!")
basic.showLeds(`
    . . . . .
    . # . # .
    # . # . #
    . # . # .
    . . # . .
    `)
basic.clearScreen()
music.ringTone(294)
music.ringTone(330)
music.ringTone(494)
music.playMelody("F E D C D - F - ", 120)
music.setVolume(255)
basic.clearScreen()
basic.showString("Shake the mircobit to play a game")
basic.clearScreen()
basic.forever(function () {
	
})
