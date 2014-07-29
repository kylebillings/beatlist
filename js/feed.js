$(document).ready(function() {

    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=kylebillings&api_key=baa058997d36363f5406bfdbc0e4da25&format=json", function(data) {

        var html = ''; // we declare the variable that we'll be using to store our information
        var counter = 1; // we declare a counter variable to use with the if statement in order to limit the result to 1
        $.each(data.recenttracks.track, function(i, item) {
            if(counter == 1) {
                html += 'Currently listening to: <span><a href="' + item.url + '" target="_blank">' + item.name + '</a> - ' + item.artist['#text'] + '</span>';
            } // close the if statement
            counter++ // add 1 to the counter variable each time the each loop runs
        }); // close each loop
        $('.listening-to h5').append(html); 
    }); // close JSON call

});