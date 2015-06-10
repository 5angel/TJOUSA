/// <reference path="../../typings/tsd.d.ts" />
define(["require", "exports", "services/TJAPIService", "controllers/MainCtrl"], function (require, exports, TJAPIService, MainCtrl) {
    var app = angular.module("test", []);
    app.service("$TJAPI", TJAPIService);
    app.controller("MainCtrl", MainCtrl);
    angular.element(document).ready(angular.bootstrap.bind(angular, document, ["test"]));
});
//# sourceMappingURL=app.js.map