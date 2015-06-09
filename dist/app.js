/// <reference path="../../typings/tsd.d.ts" />
define(["require", "exports", "controllers/MainCtrl"], function (require, exports, MainCtrl) {
    var app = angular.module("test", []);
    app.controller("MainCtrl", MainCtrl);
    angular.element(document).ready(angular.bootstrap.bind(angular, document, ["test"]));
});
//# sourceMappingURL=app.js.map