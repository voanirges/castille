"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/pollHub").build();
var chartBlock = '\u25A3';

connection.on("ReceiveMessage", function (user, message, add, vote) {

    buildHtmlTable(message);

});

connection.start().catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sendButton").addEventListener("click", function (event) {
    var user = document.getElementById("userInput").value;

    var message = html2json();

    if (!user) {
        user = "[anonymous]";
    }

    
    connection.invoke("SendMessage", user, message, '', '').catch(function (err) {
        return console.error(err.toString());
    });
   
    event.preventDefault();
});

function html2json() {
    var json = '{"data":';
    var otArr = [];
    var tbl2 = $('#dataTable tr').each(function (i) {
        var x = $(this).children();
        var itArr = [];
        var select1 = x[1].children[0];
        var select2 = x[2].children[0];
        itArr.push('"0":"' + select1.options[select1.selectedIndex].innerHTML + '"');
        itArr.push('"1":"' + select2.options[select2.selectedIndex].innerHTML + '"');
        otArr.push('{' + itArr.join(',') + '}');
    })
    json += "["+otArr.join(",") + ']}'

    return json;
}

