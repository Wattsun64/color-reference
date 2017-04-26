(function() {
    var btn = document.getElementById('btn'),
        body = document.body.style,
        img = document.getElementById('wheel');

    btn.addEventListener('click', clearBack);

    function clearBack() {
        var sel = document.querySelector('select'),
            btn = document.querySelector('button'),
            h = document.querySelector('h2');

        body.backgroundColor = '';
        sel.value = 'white';
        img.classList.toggle('active');
        
    }

}())