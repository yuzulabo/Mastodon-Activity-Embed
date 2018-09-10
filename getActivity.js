let domain = location.search.substring(1);
if (domain.match(/&/g)) {
    const arr = domain.split('&');
    domain = arr[0];
    document.querySelector("body").style.color = "#" + arr[1];
}
document.getElementById("domain").innerText = domain;
fetch("https://" + domain + "/api/v1/instance/activity", {
    method: 'GET'
}).then(function (response) {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error();
    }
}).then(function (json) {
    let d = new Date(parseInt(json[0]["week"]) * 1000);
    let date = d.getMonth() + 1 + "/" + d.getDate();
    document.getElementById("week").innerText = "(" + date + "~)";
    document.getElementById("toot").innerText = json[0]["statuses"];
    document.getElementById("login").innerText = json[0]["logins"];
    document.getElementById("new").innerText = json[0]["registrations"];
}).catch(function (error) {
    document.getElementById("ok").className = "invisible";
    document.getElementById("ng").className = "";
});