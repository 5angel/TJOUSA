define(["require", "exports"], function (require, exports) {
    exports.API_URL = "https://api.tjournal.ru/2/";
    var User;
    (function (User) {
        User.COUNT_MAX = 48279;
    })(User = exports.User || (exports.User = {}));
    var Club;
    (function (Club) {
        Club.COUNT_MAX = 50;
        (function (Media) {
            Media[Media["IMAGE"] = 1] = "IMAGE";
        })(Club.Media || (Club.Media = {}));
        var Media = Club.Media;
        var Category;
        (function (Category) {
            Category.NEWS = "news";
            Category.OFFTOPIC = "offtopic";
        })(Category = Club.Category || (Club.Category = {}));
    })(Club = exports.Club || (exports.Club = {}));
    var Paper;
    (function (Paper) {
        Paper.COUNT_MAX = 50;
        var Period;
        (function (Period) {
            Period.MONTH = "month";
            Period.WEEK = "week";
        })(Period = Paper.Period || (Paper.Period = {}));
    })(Paper = exports.Paper || (exports.Paper = {}));
});
//# sourceMappingURL=TJAPIDefaults.js.map