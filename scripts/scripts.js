const element = document.getElementById('color-theme');
var light_style = 'public/css/light-theme.css';
var dark_style  = 'public/css/dark-theme.css';

var theme = 'light';

        function swapDayAndNight()
        {
            if (theme == 'light') {
                theme = 'dark';
                element.setAttribute('href', dark_styles);
            } else {
                theme = 'light';
                element.setAttribute('href', light_styles);
            }
        }