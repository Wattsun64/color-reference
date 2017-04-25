(function() {
    var btn = document.getElementById('btn'),
        body = document.body.style;

    btn.addEventListener('click', clearBack);

    function clearBack() {
        var sel = document.querySelector('select'),
            btn = document.querySelector('button'),
            h = document.querySelector('h2');

        body.backgroundColor = '';
        sel.value = 'white';

    }

}())