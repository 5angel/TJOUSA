// misc
import TJAPIDefaults = require("misc/TJAPIDefaults");

export function getRandomArbitrary(max: number = Number.MAX_VALUE, min: number = 0) {
    return Math.random() * (max - min) + min;
}

export module GoogleCajaHTMLSanitizer {
    // Copyright (C) 2006 Google Inc.
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    //      http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.

    var TAG_BODY = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';

    var TARG_OR_COMMENT: RegExp = new RegExp(
        "<(?:"
        // Comment body.
        + "!--(?:(?:-*[^->])*--+|-?)"
        // Special "raw text" elements whose content should be elided.
        + "|script\\b" + TAG_BODY + ">[\\s\\S]*?</script\\s*"
        + "|style\\b" + TAG_BODY + ">[\\s\\S]*?</style\\s*"
        // Regular name
        + "|/?[a-z]"
        + TAG_BODY
        + ")>",
        "gi");

    export function stripHTMLTags(source: string): string {
        var tmp: string;

        do {
            tmp = source;
            source = source.replace(TARG_OR_COMMENT, "");
        } while (source !== tmp);

        return source.replace(/</g, "&lt;");
    }
}

export module sort {
    export function papersByDate(a: IPaper, b: IPaper): number {
        if (a.date !== b.date) {
            return a.date > b.date ? -1 : 1;
        }

        return 0;
    }
}

export module process {
    export function clubToPaper(club: IClub): IPaper {
        var picture: string = club.cover_image_url;

        if (!picture && club.media) {
            club.media.some((media: IClubMedia): boolean => {
                var isPicture: boolean = media.type === TJAPIDefaults.Club.Media.IMAGE;

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
}