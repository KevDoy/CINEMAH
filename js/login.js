// JavaScript Document
function process()
{
var url=window.location.protocol + "//" + document.getElementById("user").value + ":" + document.getElementById("pass").value + "@" + window.location.host + "/start/index.html?=" + document.getElementById("user").value;
location.href=url;
return false;
}
