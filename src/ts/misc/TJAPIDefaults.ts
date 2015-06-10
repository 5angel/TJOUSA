export var API_URL: string = "https://api.tjournal.ru/2/";

export module User {
    export var COUNT_MAX: number = 48279;
}

export module Club {
    export var COUNT_MAX: number = 50;

    export module Category {
        export var NEWS:     string = "news";
        export var OFFTOPIC: string = "offtopic";
    }
}

export module Paper {
    export var COUNT_MAX: number = 50;

    export module Period {
        export var MONTH: string = "month";
        export var WEEK:  string = "week";
    }
}