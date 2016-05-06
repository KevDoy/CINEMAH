// JavaScript Document
function process()
{
var url=window.location.protocol + "//" + document.getElementById("user").value + ":" + document.getElementById("pass").value + "@" + window.location.host + "/start"
location.href=url;
return false;
}
