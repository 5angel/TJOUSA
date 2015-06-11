define(["require", "exports", "misc/utils", "misc/TJAPIDefaults"], function (require, exports, utils, TJAPIDefaults) {
    var PAPERS_PER_PAGE = 20;
    var MainCtrl = (function () {
        function MainCtrl(api) {
            this.api = api;
            this.parseContent();
        }
        MainCtrl.prototype.parseContent = function () {
            var that = this;
            var content = [];
            that.api.paper({ count: PAPERS_PER_PAGE })
                .then(function (response) {
                content.push.apply(content, response.data);
                return that.api.club({ count: PAPERS_PER_PAGE });
            })
                .then(function (response) {
                content.push.apply(content, response.data.map(utils.process.clubToPaper));
                return that.api.club({
                    count: PAPERS_PER_PAGE,
                    category: TJAPIDefaults.Club.Category.OFFTOPIC
                });
            })
                .then(function (response) {
                content.push.apply(content, response.data.map(utils.process.clubToPaper));
                content.sort(utils.sort.papersByDate);
                that.papers = content;
            });
        };
        MainCtrl.prototype.getDomain = function (link) {
            return link.split("/")[2];
        };
        MainCtrl.$inject = ["$TJAPI"];
        return MainCtrl;
    })();
    return MainCtrl;
});
//# sourceMappingURL=MainCtrl.js.map