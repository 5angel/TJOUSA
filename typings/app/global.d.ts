interface IAuthor {
    id: number;
    name: string;
    picture_url: string;
    picture_big_url?: string;
    url: string;
}

interface ICategory {
    id: number;
    name: string;
    uri: string;
}

interface ICategoryPaper extends ICategory {
    isShowInGrid?: boolean;
    archived?: boolean;
}

interface IPaper {
    id: number;
    title: string;
    subtitle: string;
    url: string;
    path?: string;
    external_link: string;
    external_link_wrapped: string;
    author: IAuthor;
    comments_count: number;
    hits: number;
    category: ICategoryPaper;
    display_type?: number;
    is_commentsClosed?: boolean;
    is_advertisment?: boolean;
    is_realtimeClosed?: boolean;
    picture_url?: string;
    picture_big_url?: string;
    picture_png_preview_url?: string;
    picture_url_original?: string;
    picture_big_url_original?: string;
    isFavorited: boolean;
    date: number;
}

interface IPaperParams {
    count?: number;
    offset?: number;
    period?: string;
}

interface IAccountShort {
    id: number;
    name: string;
    profile_image_url: string;
    url: string;
}

interface IClubMedia {
    thumbnail_url: string;
    media_url: string;
    thumbnail_width: number;
    thumbnail_height: number;
    type: number;
}

interface IClub{
    id: number;
    title: string;
    url: string;
    cover_image_url: string;
    cover_image_size: number;
    entry: string;
    author: IAccountShort;
    media: IClubMedia[];
    comments_count: number;
    hits: number;
    likes: {
        summ: number;
        count: number;
        is_liked: boolean;
        is_hidden: boolean
    };
    external_link: string;
    external_link_domain: string;
    external_link_wrapped: string;
    category: ICategory;
    inspiredByThis: boolean;
    isFavorited: boolean;
    date: number;
}

interface IClubParams {
    count?: number;
    offset?: number;
    category?: string;
    sortMode?: string;
    sortModeAdditional?: string;
}

interface ISocialAccount {
    socialId: number;
    socialType: number;
    socialClass: string;
    screenName: string;
    url: string;
}

interface IAccountInfo {
    id: number;
    name: string;
    profile_image_url: string;
    profile_big_image_url: string;
    profile_background_url: string;
    date: number;
    is_club_member: boolean;
    rating: {
        karma: number;
        karmaCount: number;
    };
    socialAccounts: ISocialAccount[];
}
