"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/pollHub").build();

connection.on("ReceiveMessage", function (user, message) {
    buildHtmlTable(message);
});

connection.start().catch(function (err) {
    return console.error(err.toString());
});

function buildHtmlTable(arr) {
    $("#dataTableClient tr").remove();
    arr = JSON.parse(arr)["data"];
    for (var i = 0; i < arr.length; i++) {
        addOddsRow('dataTableClient', arr[i]["0"], arr[i]["1"])
    }
}

function addOddsRow(tableID, first, second) {
    var table = document.getElementById(tableID);
    var row = table.insertRow(0);
    var newcell = row.insertCell(0);
    newcell.innerHTML = "<button style='width:120px;'>" + first + "</button>";
    var newcell2 = row.insertCell(1);
    newcell2.innerHTML = "<button style='width:120px;'>" + second + "</button>";

}