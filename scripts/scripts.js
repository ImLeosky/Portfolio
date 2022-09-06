// Dark and light theme.

function lightTheme(){
    var setTheme = document.body;

    setTheme.classList.toggle("light-theme")

    var theme;

    if(setTheme.classList.contains("light-theme")){
        console.log("Light theme!");
        theme="LIGHT";
        document.getElementById("theme-text").innerHTML = "Dark Theme!";
        document.getElementById("theme-switch").id = "theme-switch-light";
    } else{
        console.log("dark-theme");
        theme="DARK";
        document.getElementById("theme-text").innerHTML = "Light Theme!";
        document.getElementById("theme-switch-light").id = "theme-switch";
    }
}

// Text code effect.

consoleText(['Writing "Hello World".', 'Want a coffe?', 'Hard working on CSS.'], 'text',['orange','rebeccapurple','lightblue']);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    
    target.setAttribute('style', 'color:' + colors[0])
    
    window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount)
        window.setTimeout(function() {
            var usedColor = colors.shift();
            colors.push(usedColor);
            var usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.setAttribute('style', 'color:' + colors[0])
            letterCount += x;
            waiting = false;
        }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function() {
            x = -1;
            letterCount += x;
            waiting = false;
        }, 1000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)

    window.setInterval(function() {
        if (visible === true) {
        con.className = 'console-underscore hidden'
        visible = false;

        } else {
            con.className = 'console-underscore'

        visible = true;
        }
    }, 400)
}