// Subtract the Product and Sum of Digits of an Integer

const subtractProducxtAndSum = (n: number): number => {
    let arr: Array<string> = (n + '').split('')
    let arr2: Array<number> = arr.map(function (item) {
        return Number(item)
    })
    const multi = arr2.reduce((accumulator: number, current: number) => accumulator * current)

    const sum = arr2.reduce((accumulator: number, current: number) => accumulator + current)
    return multi - sum
};