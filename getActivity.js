let domain = location.search.substring(1);
document.getElementById("domain").innerText = domain;
fetch("https://"+domain+"/api/v1/instance/activity", {
    method: 'GET'
}).then(function(response) {
    if(response.ok) {
        return response.json();
    } else {
        throw new Error();
    }
}).then(function(json) {
    document.getElementById("toot").innerText = json[0]["statuses"];
    document.getElementById("login").innerText = json[0]["logins"];
    document.getElementById("new").innerText = json[0]["registrations"];
}).catch(function(error) {
    document.getElementById("ok").className = "invisible";
    document.getElementById("ng").className = "";
});