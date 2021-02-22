// tests go here; this will not be compiled when this package is used as an extension.

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
//% block="ドローン""
namespace Tello {
    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block="まえにすすむ %v"
    export function forward(value : number): void {
        if (flying == 1) {
            radio.sendString("forward " + value)
            flying = 1
        }
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block="後ろ"
    export function back(): void {
        if (flying == 1) {
            radio.sendString("back")
            flying = 1
        }
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block="左"
    export function left(): void {
        if (flying == 1) {
            radio.sendString("left")
            flying = 1
        }
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block="右"
    export function right(): void {
        if (flying == 1) {
            radio.sendString("right")
            flying = 1
        }
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block="右回り"
    export function rotate_cw(): void {
        if (flying == 1) {
            radio.sendString("rotate_cw")
            flying = 1
        }
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block="左回り"
    export function rotate_ccw(): void {
        if (flying == 1) {
            radio.sendString("rotate_ccw")
            flying = 1
        }
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block="飛ぶ"　
    //% group="ドローン"
    export function takeoff(): void {
        if (flying == 0) {
            radio.sendString("takeoff")
            flying = 1
        }
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block="ちゃくち"
    //% group="ドローン"
    export function land(): void {
        if (flying == 1) {
            radio.sendString("land")
            flying = 0
        }
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block="飛ぶか，ちゃくちする"
    //% group="ドローン"
    export function fly_or_land(): void {
        if (flying == 0) {
            radio.sendString("takeoff")
            flying = 1
        }else if(flying == 1){
            radio.sendString("land")
            flying = 0
        }
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block="フリップ"
    //% group="ドローン"
    export function flip(): void {
        if (flying == 1) {
            radio.sendString("flip")
        }
    }
}

let flying = 0