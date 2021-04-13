/**
 * Custom blocks
 */
//% weight=0 color=#00008b icon=""
//% block="コントローラー"
namespace dronecontroller {
    /**
     * 左スティックのX軸の動作値を取得する．
     */
    //% block="左スティックのよこのすうち"
    //% group="スティックのすうちをしゅとくする"
    export function getleft_X(): number {
        pins.digitalWritePin(DigitalPin.P2, 0)
        return Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, -100, 100)
    }

    /**
     * 左スティックのY軸の動作値を取得する．
     */
    //% block="左スティックのたてのすうち"
    //% group="スティックのすうちをしゅとくする"
    export function getleft_Y(): number {
        pins.digitalWritePin(DigitalPin.P2, 0)
        return Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, -100, 100)
    }

    /**
     * 右スティックのX軸の動作値を取得する．
     */
    //% block="右スティックのよこのすうち"
    //% group="スティックのすうちをしゅとくする"
    export function getright_X(): number {
        pins.digitalWritePin(DigitalPin.P2, 1)
        return Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, -100, 100)
    }

    /**
     * 右スティックのY軸の動作値を取得する．
     */
    //% block="右スティックのたてのすうち"
    //% group="スティックのすうちをしゅとくする"
    export function getright_Y(): number {
        pins.digitalWritePin(DigitalPin.P2, 0)
        return Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, -100, 100)
    }
}