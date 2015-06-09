define(["require", "exports", "misc/utils"], function (require, exports, utils) {
    var USERS_MAX = 48279;
    var MainCtrl = (function () {
        function MainCtrl($TJAPI) {
            $TJAPI.accountInfo(utils.getRandomArbitrary(USERS_MAX))
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