input.onButtonPressed(Button.A, function () {
    edubitMotors.runMotor(MotorChannel.M1, MotorDirection.Forward, 100)
    basic.pause(randint(500, 1000))
    edubitMotors.brakeMotor(MotorChannel.M1)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ringtone), music.PlaybackMode.InBackground)
})
basic.forever(function () {
	
})
