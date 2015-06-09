define(["require", "exports"], function (require, exports) {
    function getRandomArbitrary(max, min) {
        if (max === void 0) { max = Number.MAX_VALUE; }
        if (min === void 0) { min = 0; }
        return Math.random() * (max - min) + min;
    }
    exports.getRandomArbitrary = getRandomArbitrary;
});
//# sourceMappingURL=utils.js.map