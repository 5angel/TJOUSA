define(["require", "exports", "misc/TJAPIDefaults"], function (require, exports, TJAPIDefaults) {
    var TJAPIService = (function () {
        function TJAPIService($http) {
            this.$http = $http;
        }
        TJAPIService.prototype.paper = function (params) {
            return this.$http.get(TJAPIDefaults.API_URL + "paper", { params: params });
        };
        TJAPIService.prototype.club = function (params) {
            return this.$http.get(TJAPIDefaults.API_URL + "club", { params: params });
        };
        TJAPIService.prototype.accountInfo = function (userId) {
            return this.$http.get(TJAPIDefaults.API_URL + "account/info", {
                params: { userId: userId }
            });
        };
        TJAPIService.$inject = ["$http"];
        return TJAPIService;
    })();
    return TJAPIService;
});
//# sourceMappingURL=TJAPIService.js.map