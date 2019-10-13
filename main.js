Skip to content
Why GitHub? 
Enterprise
Explore 
Marketplace
Pricing 
Search

Sign in
Sign up
406Code-Institute-Solutions/WorkingWithExternalResources
 Code Issues 0 Pull requests 0 Projects 0 Security Insights
Join GitHub today
GitHub is home to over 40 million developers working together to host and review code, manage projects, and build software together.

WorkingWithExternalResources/03-DataAndTheDOM/05-tabular_data_part_three/main.js
@NielMc NielMc incorrect argument
18783a8 on 19 Feb
@NielMc@aaronsnig501
47 lines (35 sloc)  1.07 KB
  
const baseURL = "https://swapi.co/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "/");
    xhr.send();
}

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`)
    });

    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
    var el = document.getElementById("data");
    el.innerHTML = "";

    getData(type, function(data) {
        var tableRows = [];
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            var dataRow = [];

            Object.keys(item).forEach(function(key) {
                dataRow.push(`<td>${item[key]}</td>`);
            });
            tableRows.push(dataRow)
        });

        el.innerHTML = `<table>${tableHeaders}</table>`;
    });
}

