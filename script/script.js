

(function update() {
    $.getJSON( "https://api.weather.com/v2/pws/observations/current?stationId=IJANDA6&format=json&units=m&apiKey=7e430c180d114d74830c180d11ed740c&numericPrecision=decimal")
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
        setTimeout(update, 5000);
    });
})(); 