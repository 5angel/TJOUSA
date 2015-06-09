define(["require", "exports", "misc/utils"], function (require, exports, utils) {
    var USERS_MAX = 48279;
    var MainCtrl = (function () {
        function MainCtrl($TJAPI) {
            var userId = Math.floor(utils.getRandomArbitrary(USERS_MAX));
            $TJAPI.accountInfo(userId)
                .success(this.onAccountInfo.bind(this));
        }
        MainCtrl.prototype.onAccountInfo = function (data) {
            console.log(data);
        };
        MainCtrl.$inject = ["$TJAPI"];
        return MainCtrl;
    })();
    return MainCtrl;
});
//# sourceMappingURL=MainCtrl.js.map