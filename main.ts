let currFreq = 0
let lastFreq = 0
basic.forever(function () {
    currFreq = Math.map(input.acceleration(Dimension.X), -1024, 1023, 1, 5000)
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Sine,
    Math.map(input.acceleration(Dimension.X), -1024, 1023, 1, 5000),
    Math.map(input.acceleration(Dimension.Y), -1024, 1023, 1, 5000),
    randint(0, 1024),
    randint(0, 1024),
    randint(40, 100),
    SoundExpressionEffect.None,
    InterpolationCurve.Curve
    ), SoundExpressionPlayMode.UntilDone)
    lastFreq = currFreq
})
