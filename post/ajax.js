window.onload = function() {
    document.querySelector('#send').onclick = function (){ ajaxPost(a = b);}
}


function ajaxPost(params){
    
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if(request.readyState == 4 && request.status == 200) {
           document.querySelector('#result').innerHTML = request.responseText
        };
    }

    request.open('POST', app.php);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(params);
}