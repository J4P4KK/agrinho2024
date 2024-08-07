
(function update() {
    $.getJSON( "https://api.weather.com/v2/pws/observations/current?stationId=IJANDA6&format=json&units=m&apiKey=88425c513b244dec825c513b241dec73&numericPrecision=decimal")
    .done(function( json ) {
        //Chamando as informações da estação meteorológica
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
    //Fazendo atualizar e mensagem de erro
    .fail(function( jqxhr, textStatus, error ) {
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
    }).then(function() {
        setTimeout(update, 30000);
    });
})(); 

//Chamando a I.A 
function textIA(str) {
    var settings = {
        "url": "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDdXcVm_3NQ4nhlQ41Vl8-m-9SGhiYhfPY",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "contents": [
            {
              "parts": [
                {
                  "text": str
                }
              ]
            }
          ]
        }),
      };
      
      $.ajax(settings)
        .done(function (response) {
            // console.log(response);
            $('#textIA').text(response.candidates[0].content.parts[0].text);
        });
}

//pergunta I.A
textIA('A temperatura em Jandaia do Sul está 23°C. Descreva em apenas 30 palavras, qual a recomendação agronômica para o cultivo de soja nesta condição climática');
