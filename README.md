# jQuery-openWeatherData
Lightweight jQuery plugin to get current weather data from [Open Weather](https://openweathermap.org/)

## Installation
Include the latest version of [jQuery](http://jquery.com/download), [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/download/) and `jQuery-openWeatherData.js` in the `<head>` of your HTML document:
```html
<link src="bootstrap.min.css">
<script src="jQuery.min.js"></script>  
<script src="jQuery-openWeatherData.js"></script>
```

## How to Use

**Syntax Example**  
```HTML
<div class="weather"></div>
```

```javascript
$.fn.weatherData.defaults.apiKey = "YOUR-API-KEY-HERE";

$(document).ready(function () {
    $("div.weather").weatherData({
        titleFontSize: 28,
        tempFontSize: 28, 
        : 16
    });
});
```

**Custom Parameters**   
`apiKey` API KEY from [Open Weather](https://openweathermap.org/)   
`titleFontSize` Font size for title (eg. Weather for Kathmandu)  
`tempFontSize` Font size of temprature text (eg. 23°C)  
`dataFontSize` Font size for other weather details in the table

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details