var pass = 50;

var score = 20;

var hasPassed = score >= pass;

var el = document.getElementById('decision');
el.textContent = 'Test zaliczony: ' + hasPassed;
