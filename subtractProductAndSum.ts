// Subtract the Product and Sum of Digits of an Integer

const subtractProducxtAndSum = (n: number): number => {
    let arr: Array<number> = (n + '').split('').map(num=>Number(num))
    const multi = arr .reduce((accumulator: number, current: number) => accumulator * current)
    const sum = arr.reduce((accumulator: number, current: number) => accumulator + current)
    return multi - sum
};