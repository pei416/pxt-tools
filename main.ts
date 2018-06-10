//% weight=0 color=#3CB371 icon="\uf0ad" block="Tools"
namespace tools {
    /**
    * 計算長方形面積，並回傳
    */
    //% blockId="areaOfRectangle" block="area of rectangle length %length|width %width"
    //% blockGap=2 weight=0 blockExternalInputs=true
    export function areaOfRectangle(length: number, width:number): number {
        return length*width
    }
    /**
    * 計算長方形面積，不回傳，只顯示在LED
    */
    //% blockId="ledOfRectangle" block="show area of rectangle length %length|width %width"
    //% blockGap=2 weight=1
    export function ledOfRectangle(length: number, width:number): void {
        basic.showNumber(length*width)
    }
	/**
    * 判斷是否為質數
    */
    //% blockId="PrimeNumber" block="Is it prime number? InputNumber %InputNumber"
    //% blockGap=2 weight=1
    export function PrimeNumber(InputNumber: number): number {
        let count = 0
		for (let i = 1; i <= InputNumber; i++) {
			if (InputNumber % i == 0) {
				count = count + 1 
			}
		}
		if (count == 2) {
			return 1
		}
		else {
			return 0
		}
    }
}
