var API_URL: string = "https://api.tjournal.ru/2/";

class TJAPIService {
    static $inject: string[] = ["$http"];

    constructor(protected $http: ng.IHttpService) {
        
    }

    accountInfo(userId: number): ng.IHttpPromise<IAccountInfo> {
        return this.$http.get(API_URL + "account/info", {
            params: { userId }
        });
    }
}

export = TJAPIService;