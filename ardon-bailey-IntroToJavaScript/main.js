var students = [
    {first:'Max', last:'Smith'},
    {first:'Ardon', last:'Bailey'},
    {first:'Todd', last:'Gumke'},
    {first:'Bob', last:'Plug'},
    {first:'Trub', last:'Lee'}];

function full_name (first_name, last_name) {
    var foo = false;
    for (var i = 0; i < students.length; i++) {
        if (students[i].first === first_name && students[i].last === last_name) {
            foo = true;
        }
    }
    if (foo === true) {
        alert('yay');
    } else {
        alert('sad');
    }
}


function validator() {
    var result = document.getElementById('result');
    result.value = full_name(document.getElementById('first_name').value, document.getElementById('last_name').value);
}
