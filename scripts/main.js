var THUMBNAIL_SEL = '[data-thumbnails]';
var thumbnailContainer = document.querySelector(THUMBNAIL_SEL);

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

// renders movie thumbnails to screen
function createThumbnails(movieData) {
    movieData.results.map( function (result) {
        var imgEl = document.createElement('img');
        imgEl.setAttribute('src', result.largerPic);
    
        var anchorEl = document.createElement('a');
        anchorEl.setAttribute('href', result.largerPic);
        anchorEl.appendChild(imgEl);

        var titleEl = document.createElement('H2');
        titleEl.textContent = result.trackName;

        var thumbnailDiv = document.createElement('div');
        thumbnailDiv.setAttribute('class', 'thumbnail-item');
        thumbnailDiv.appendChild(anchorEl);
        thumbnailDiv.appendChild(titleEl);

        thumbnailContainer.appendChild(thumbnailDiv);
    });

    return movieData;
}

// function appendThumbnails(framedMovies) {
//     framedMovies.results.forEach( function(result) {
//         thumbnailContainer.appendChild(result);
//     });
//     return framedMovies;
// }

// function drawThumbnails (movies) {
//     movies.results.map(createThumbnails).forEach(appendThumbnails);
//     return movies;
// }


function logData(movies) {
    console.log(movies);
    return movies;
}


function main() {
    getData()
    .then (parseData)
    .then (resizePics)
    .then (logData)
    .then (createThumbnails)
}

main();



