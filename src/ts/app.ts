/// <reference path="../../typings/tsd.d.ts" />

// services
import TJAPIService = require("services/TJAPIService");
// controllets
import MainCtrl = require("controllers/MainCtrl");

var app: ng.IModule = angular.module("test", []);

app.service("$TJAPI", TJAPIService);
app.controller("MainCtrl", MainCtrl);

angular.element(document).ready(angular.bootstrap.bind(angular, document, ["test"]));