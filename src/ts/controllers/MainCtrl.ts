// misc
import utils = require("misc/utils");
import TJAPIDefaults = require("misc/TJAPIDefaults");
// services
import TJAPIService = require("services/TJAPIService");

var PAPERS_PER_PAGE: number = 20;

class MainCtrl {
    static $inject: string[] = ["$TJAPI"];

    papers: IPaper[];

    protected parseContent() {
        var that = this;

        var content: IPaper[] = [];

        that.api.paper({ count: PAPERS_PER_PAGE })
            .then((response: ng.IHttpPromiseCallbackArg<IPaper[]>): ng.IPromise<IClub[]> => {
                content.push.apply(content, response.data);

                return that.api.club({ count: PAPERS_PER_PAGE });
            })
            .then((response: ng.IHttpPromiseCallbackArg<IClub[]>): ng.IPromise<IClub[]> => {
                content.push.apply(content, response.data.map(utils.process.clubToPaper));

                return that.api.club({
                    count: PAPERS_PER_PAGE,
                    category: TJAPIDefaults.Club.Category.OFFTOPIC
                });
            })
            .then((response: ng.IHttpPromiseCallbackArg<IClub[]>) => {
                content.push.apply(content, response.data.map(utils.process.clubToPaper));

                content.sort(utils.sort.papersByDate);

                that.papers = content;
            });
    }

    constructor(protected api: TJAPIService) {
        this.parseContent();
    }

    getDomain(link: string): string {
        return link.split("/")[2];
    }
}

export = MainCtrl;