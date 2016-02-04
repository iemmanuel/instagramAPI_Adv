// YOUR CODE GOES HERE
var clientID = "3565fe59fc166cb7f5a0ab9b7c982cc8";
var userInput = "";
$(document).ready(function() {
    $("#search-btn").click(function() {
        userInput = $("#search-query").val();
        searchFlickr(clientID, userInput, 10, function(photos) {
            $('#search-results').empty('#search-results');
            for (var i = 0; i < photos.photo.length; i++)
                $('#search-results').append('<img src=' + photos.photo[i].url_m + '>');
                
        });
        // your code here
    });


    $("#reset-btn").click(function() {
        $('#search-results').empty('#search-results');
    })
});