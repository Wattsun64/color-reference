(function() {
    var color = document.getElementById('colors'),
        body = document.body.style,
        img = document.getElementById('wheel');

    color.addEventListener('change', colorChange);

    function colorChange() {
        var sel = document.querySelector('select'),
            btn = document.querySelector('button'),
            h = document.querySelector('h2');

        body.backgroundColor = this.value;
        img.classList.toggle('active');


    }

}())