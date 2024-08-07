

(function update() {
    $.getJSON( "https://api.weather.com/v2/pws/observations/current?stationId=IJANDA6&format=json&units=m&apiKey=dedf3b2a74b24e319f3b2a74b26e3128&numericPrecision=decimal")
    .done(function( json ) {
        //console.log( "JSON Data: " + json );
        $('#windgust').text(json.observations[0].metric.windGust);
        $('#windspeed').text(json.observations[0].metric.windSpeed);
        $('#temp').text(json.observations[0].metric.temp);
        $('#pressure').text(json.observations[0].metric.pressure);
        $('#heatindex').text(json.observations[0].metric.heatIndex);
        $('#dewpt').text(json.observations[0].metric.dewpt);
        $('#humidity').text(json.observations[0].humidity);
        $('#preciprate').text(json.observations[0].metric.precipRate);
        $('#preciptotal').text(json.observations[0].metric.precipTotal);
    })
    .fail(function( jqxhr, textStatus, error ) {
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
    }).then(function() {
        setTimeout(update, 30000);
    });
})(); 