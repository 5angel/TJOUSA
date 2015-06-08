/// <reference path="../../typings/tsd.d.ts" />

import MainCtrl = require("controllers/MainCtrl");

var app: ng.IModule = angular.module("test", []);

app.controller("MainCtrl", MainCtrl);

angular.element(document).ready(angular.bootstrap.bind(angular, document, ["test"]));