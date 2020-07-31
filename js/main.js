// sidebar click menu
var button = document.getElementById('calls'),
changeIcon = document.getElementById('changeIcon');
changeTitle = document.getElementById('changeTitle');

button.onclick = function() {
    alert('ok');
    changeTitle.innerHTML = 'Your new phrase';
};

//trigger from another page
