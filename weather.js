$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);
    console.log(JSON.stringify(data));
    
    // Put your code here. Don't change any other code in this file. You will be sad.
    var markup = "The current temperature is " + data.currently.temperature +" degrees fahrenheit"+ " but it feels like "  + data.currently.apparentTemperature +" degrees fahrenheit." + " It will be " + data.currently.summary.toLowerCase() +" today. ";
    
    var markup2 = " Tomorrow is expected to have a high temperature of " + data.daily.data[1].apparentTemperatureMax +" degrees" + " and a low temperature of " + data.daily.data[1].apparentTemperatureMin +" degrees" + ".  It will be " + data.daily.data[1].summary.toLowerCase();
    
    var markup3 = " Two days from now is expected to have a high temperature of " + data.daily.data[2].apparentTemperatureMax + " degrees" + " and a low temperature of " + data.daily.data[2].apparentTemperatureMin +" degrees" +  ".  It will be " + data.daily.data[2].summary.toLowerCase();

    var markup4 = " Three days from now is expected to have a high temperature of " + data.daily.data[3].apparentTemperatureMax +" degrees" +  " and a low temperature of " + data.daily.data[3].apparentTemperatureMin  +" degrees" +  ".  It will be " + data.daily.data[3].summary.toLowerCase();    

    // End of your code

    $('.weather-report').html(markup);
    $('.weather-report-2').html(markup2);
    $('.weather-report-3').html(markup3);
    $('.weather-report-4').html(markup4);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});