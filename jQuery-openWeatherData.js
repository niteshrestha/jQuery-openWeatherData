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
                let raw = '';

                $.post(apiURL,
                    function (result) {
                        raw += "<div class='row'>";
                        raw += "<div class='col' style='font-size: " + config.titleFontSize + "px'>";
                        raw += "Weather for " + result["name"];
                        raw += "</div>";
                        raw += "</div>";
                        raw += "<div class='row align-items-center'>";
                        raw += "<div class='col-auto' style='font-size:" + config.tempFontSize + "px'>";
                        raw += "<img src='https://openweathermap.org/img/wn/" + result["weather"][0]["icon"] + "@2x.png'>";
                        raw += result["main"]["temp"] + "°C";
                        raw += "</div>";
                        raw += "</div>";
                        raw += "<table class='table table-bordered table-striped' style='font-size: " + config.dataFontSize + "px'>";
                        raw += "<tbody>";
                        raw += "<tr>";
                        raw += "<td>Wind</td>";
                        raw += "<td>" + result["wind"]["speed"] + " m/s</td>";
                        raw += "</tr>";
                        raw += "<tr>";
                        raw += "<td>Cloud</td>";
                        raw += "<td>" + result["weather"][0]["description"] + "</td>";
                        raw += "</tr>";
                        raw += "<tr>";
                        raw += "<tr>";
                        raw += "<td>Pressure</td>";
                        raw += "<td>" + result["main"]["pressure"] + " hpa</td>";
                        raw += "</tr>";
                        raw += "<tr>";
                        raw += "<td>Humidity</td>";
                        raw += "<td>" + result["main"]["humidity"] + "%</td>";
                        raw += "</tr>";
                        raw += "</tbody>";
                        raw += "</table>";
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