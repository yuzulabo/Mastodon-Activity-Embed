let langs = window.navigator.languages || window.navigator.browserLanguages;
const translations = {
    en: {}, // Default
    ja: {
        "title": "週統計",
        "new-statuses": "トゥート数",
        "statuses": "トゥート",
        "active-users": "ログイン数",
        "login-users": "人",
        "registration": "新規登録数",
        "registration-users": "人"
    },
    ko: {
        "title": "주 통계",
        "new-statuses": "툿 수",
        "statuses": "툿",
        "active-users": "로그인 수",
        "login-users": "명",
        "registration": "신규 등록 수",
        "registration-users": "명"
    },
}

function getFirstMatchedLanguage() {
    for (let lang of langs) {
        if (lang in translations) {
            return lang
        }
    }
}

let lang = translations[getFirstMatchedLanguage()];
if (lang) {
    for (let key in lang) {
        document.getElementById(`text-${key}`).innerText = lang[key];
    }
}
