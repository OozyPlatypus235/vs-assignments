var Square = document.querySelector('#Square');

function colorChange (color) {
    Square.style.backgroundColor = color;
}

Square.addEventListener('mouseover', function () {
    colorChange('blue');
});

Square.addEventListener('mousedown', function () {
    colorChange('red');
});

Square.addEventListener('mouseup', function () {
    colorChange('yellow');
});

Square.addEventListener('dblclick', function () {
    colorChange('green');
});

window.addEventListener('wheel', function() {
    colorChange('orange');
});

window.addEventListener('keydown', function(e) {
    switch (e.key.toLowerCase()) {
        case 'b':
            colorChange('blue');
            break;
        case 'r':
            colorChange('red');
            break;
        case 'y':
            colorChange('yellow');
            break;
        case 'g':
            colorChange('green');
            break;
        case 'o':
            colorChange('orange');
            break;

    }
});

Square.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});




