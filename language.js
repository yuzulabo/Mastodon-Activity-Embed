let lang = window.navigator.language || window.navigator.browserLanguage;
if (lang.match(/ja/i)) {
    let lang = {
        "title": "週統計",
        "new-statuses": "トゥート数",
        "statuses": "トゥート",
        "active-users": "ログイン数",
        "login-users": "人",
        "registration": "新規登録数",
        "registration-users": "人"
    }, key;

    for (key in lang) {
        document.getElementById("text-"+key).innerText = lang[key];
    }
}