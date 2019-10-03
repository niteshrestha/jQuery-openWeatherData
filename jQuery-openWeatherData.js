(function ($) {
    $.fn.weatherData = function (options) {
        return this.each(function () {
            let element = $(this);
            let config = $.extend({}, $.fn.weatherData.defaults, options);

            if (config.apiKey != "") {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(callWeatherApi);
                }
                else {
                    alert("Couldn't get location data.");
                }
            }
            else {
                alert("API key not provided.");
            }

            function callWeatherApi(position) {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                let apiURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + config.apiKey + "&units=metric";

                $.post(apiURL,
                    function (result) {
                        let raw = "<div class='row'><div class='col' style='font-size: " + config.titleFontSize + "px'>Weather for " + result["name"] + "</div></div>"
                            + "<div class='row align-items-center'><div class='col-auto' style='font-size:" + config.tempFontSize + "px'><img src='https://openweathermap.org/img/wn/"
                            + result["weather"][0]["icon"] + "@2x.png'>"
                            + result["main"]["temp"]
                            + "°C</div></div><table class='table table-bordered table-striped' style='font-size: " + config.dataFontSize + "px'><tbody><tr><td>Wind</td><td>"
                            + result["wind"]["speed"]
                            + " m/s</td></tr><tr><td>Cloud</td><td>"
                            + result["weather"][0]["description"]
                            + "</td></tr><tr><td>Pressure</td><td>"
                            + result["main"]["pressure"]
                            + " hpa</td></tr><tr><td>Humidity</td><td>"
                            + result["main"]["humidity"]
                            + "%</td></tr></tbody></table>";
                        element.append(raw);
                    });
            }
        });
    };

    $.fn.weatherData.defaults = {
        apiKey: "",
        titleFontSize: 28,
        tempFontSize: 28,
        dataFontSize: 16
    }
}(jQuery));