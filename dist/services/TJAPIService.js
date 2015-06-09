define(["require", "exports"], function (require, exports) {
    var API_URL = "https://api.tjournal.ru/2/";
    var TJAPIService = (function () {
        function TJAPIService($http) {
            this.$http = $http;
        }
        TJAPIService.prototype.accountInfo = function (userId) {
            return this.$http.get(API_URL + "account/", {
                params: { userId: userId }
            });
        };
        TJAPIService.$inject = ["$http"];
        return TJAPIService;
    })();
    return TJAPIService;
});
//# sourceMappingURL=TJAPIService.js.map