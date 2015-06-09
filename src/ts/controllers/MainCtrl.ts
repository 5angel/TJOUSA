// misc
import utils = require("misc/utils");
// services
import TJAPIService = require("services/TJAPIService");

var USERS_MAX: number = 48279;

class MainCtrl {
    static $inject: string[] = ["$TJAPI"];

    user: IAccountInfo;

    protected onAccountInfo(data: IAccountInfo) {
        this.user = data;
    }

    constructor($TJAPI: TJAPIService) {
        var userId: number = Math.floor(utils.getRandomArbitrary(USERS_MAX));

        $TJAPI.accountInfo(userId)
            .success(this.onAccountInfo.bind(this));
    }
}

export = MainCtrl;