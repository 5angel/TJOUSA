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
