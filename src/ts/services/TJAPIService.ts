// misc
import TJAPIDefaults = require("misc/TJAPIDefaults");

class TJAPIService {
    static $inject: string[] = ["$http"];

    constructor(protected $http: ng.IHttpService) {
        
    }

    paper(params?: IPaperParams): ng.IHttpPromise<IPaper[]> {
        return this.$http.get(TJAPIDefaults.API_URL + "paper", { params });
    }

    club(params?: IClubParams): ng.IHttpPromise<IClub[]> {
        return this.$http.get(TJAPIDefaults.API_URL + "club", { params });
    }

    accountInfo(userId: number): ng.IHttpPromise<IAccountInfo> {
        return this.$http.get(TJAPIDefaults.API_URL + "account/info", {
            params: { userId }
        });
    }
}

export = TJAPIService;