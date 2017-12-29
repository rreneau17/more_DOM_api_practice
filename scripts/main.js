// pulls movie data via AJAX method
function getData() {
    var url = `https://my-little-cors-proxy.herokuapp.com/https://itunes.apple.com/search?term=sideways&entity=movie&limit=10`;
    // var url = `https://my-little-cors-proxy.herokuapp.com/http://api.walmartlabs.com/v1/search?query=sideways&format=json&apiKey=cwkwmzcnca9e8jtcw34wpppc&facet=on&categoryId=4096`;
    return $.get(url);
}

// parses JSON string  
function parseData(movies) {
    return JSON.parse(movies);
}

// resizes thumbnail pic to 400x400 pixels
function resizePics(data) {
    data.results.forEach( function(result) {
        result.largerPic = result.artworkUrl100.replace("100x100","400x400");
    });
    return data;
}

function logData(movies) {
    console.log(movies);
}


function main() {
    getData()
    .then (parseData)
    .then (resizePics)
    .then (logData) 
}

main();



