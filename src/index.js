(function() {
    var color = document.getElementById('colors'),
        body = document.body.style;

    color.addEventListener('change', colorChange);

    function colorChange() {
        var sel = document.querySelector('select'),
            btn = document.querySelector('button'),
            h = document.querySelector('h2');

        body.backgroundColor = this.value;


    }

}())