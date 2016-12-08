// animated weather
// bg color = temp
// animate sun position
$(document).ready(function() {
  
    
function getWeather() {
    var url = "http://api.openweathermap.org/data/2.5/weather?&APPID=771dc6358af14838cbe2b758b2d53567";
    var city = $('#city').val();
    var units = $('#units').val();
    
        
  $.ajax({
    dataType: "json",
    url: url,
    jsonCallback: 'json',
    data: { q: city, units: units },
    cache: false,
    success: function (data) {
        data.city = city; 
        goWeather(data);
    }
  });
}


 
    function goWeather(weather) {
        var wind = $('#units').val() == "imperial" ? "mph" : "m/s";
        var temp = $('#units').val() == "imperial" ? "F" : "C";
        
        $("#tTarget").text(Math.round(weather.main.temp) + String.fromCharCode(176) + " " + temp);
        $("#cTarget").text(weather.city);
        $("#gTarget").text(weather.weather[0].main);
        $("#wTarget").text(weather.wind.speed + " " + wind);
    }
    
        $("form").submit(function (e) {
                e.preventDefault();
                getWeather();
            });

        $("#button").click(function(){
           getWeather();
    });

    
});  

