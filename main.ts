let strip = neopixel.create(DigitalPin.P0, 9, NeoPixelMode.RGB)
let indeks = 0
basic.forever(function () {
    for (let index = 0; index < 400; index++) {
        indeks = indeks + 1
        strip.showRainbow(indeks, 30 + indeks)
        strip.show()
        basic.pause(10)
    }
})
