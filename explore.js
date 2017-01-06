function openNav() {
    var div = document.getElementById('myNav');
    if (div.style.display !== 'block') {
        div.style.display = 'block';
    }
    else {
        div.style.display = 'none';
    }
}

function myfunction1(){
	var div = document.getElementById('locationInput');
    if (div.style.display !== 'block') {
        div.style.display = 'block';
    }
    else {
        div.style.display = 'none';
    }
}

function myfunction2() {
	var div = document.getElementById('fundingInput');
    if (div.style.display !== 'block') {
        div.style.display = 'block';
    }
    else {
        div.style.display = 'none';
    }
}

function myfunction3(){
	var div = document.getElementById('causeInput');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
}