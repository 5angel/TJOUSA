define(["require", "exports", "misc/TJAPIDefaults"], function (require, exports, TJAPIDefaults) {
    function getRandomArbitrary(max, min) {
        if (max === void 0) { max = Number.MAX_VALUE; }
        if (min === void 0) { min = 0; }
        return Math.random() * (max - min) + min;
    }
    exports.getRandomArbitrary = getRandomArbitrary;
    var GoogleCajaHTMLSanitizer;
    (function (GoogleCajaHTMLSanitizer) {
        var TAG_BODY = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';
        var TARG_OR_COMMENT = new RegExp("<(?:"
            + "!--(?:(?:-*[^->])*--+|-?)"
            + "|script\\b" + TAG_BODY + ">[\\s\\S]*?</script\\s*"
            + "|style\\b" + TAG_BODY + ">[\\s\\S]*?</style\\s*"
            + "|/?[a-z]"
            + TAG_BODY
            + ")>", "gi");
        function stripHTMLTags(source) {
            var tmp;
            do {
                tmp = source;
                source = source.replace(TARG_OR_COMMENT, "");
            } while (source !== tmp);
            return source.replace(/</g, "&lt;");
        }
        GoogleCajaHTMLSanitizer.stripHTMLTags = stripHTMLTags;
    })(GoogleCajaHTMLSanitizer = exports.GoogleCajaHTMLSanitizer || (exports.GoogleCajaHTMLSanitizer = {}));
    var sort;
    (function (sort) {
        function papersByDate(a, b) {
            if (a.date !== b.date) {
                return a.date > b.date ? -1 : 1;
            }
            return 0;
        }
        sort.papersByDate = papersByDate;
    })(sort = exports.sort || (exports.sort = {}));
    var process;
    (function (process) {
        function clubToPaper(club) {
            var picture = club.cover_image_url;
            if (!picture && club.media) {
                club.media.some(function (media) {
                    var isPicture = media.type === TJAPIDefaults.Club.Media.IMAGE;
                    if (isPicture) {
                        picture = media.thumbnail_url;
                    }
                    return isPicture;
                });
            }
            return {
                id: club.id,
                title: club.title,
                subtitle: GoogleCajaHTMLSanitizer.stripHTMLTags(club.entry),
                url: club.url,
                external_link: club.external_link || null,
                external_link_wrapped: club.external_link_wrapped,
                author: {
                    id: club.author.id,
                    name: club.author.name,
                    picture_url: club.author.profile_image_url,
                    url: club.author.url
                },
                comments_count: club.comments_count,
                hits: club.hits,
                category: club.category,
                picture_big_url: picture || TJAPIDefaults.Picture.PICTURE_BLANK_URL,
                isFavorited: club.isFavorited,
                date: club.date
            };
        }
        process.clubToPaper = clubToPaper;
    })(process = exports.process || (exports.process = {}));
});
//# sourceMappingURL=utils.js.map