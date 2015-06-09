export function getRandomArbitrary(max: number = Number.MAX_VALUE, min: number = 0) {
    return Math.random() * (max - min) + min;
}