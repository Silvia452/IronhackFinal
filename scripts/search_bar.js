//PARTE DE LA BARRA DE BÚSQUEDA
document.getElementById('search_bar').addEventListener('keypress', function (event){
    //cuando se presiona una tecla se activa la función, por eso el keypress

    var key = event.which || event.keyCode; //obtiene el código de la tecla presionada y depende del navegador se emplea una u otra

    //tecla Enter
    if (key ==13){
        event.preventDefault(); //prevenir el refresco de la página
        searchwithLoader(); //va a la función implementada abajo
    }

});

//PARTE DEL SPINNER
function searchwithLoader(){
    showLoader(); //mostrar

    setTimeout(function() { //ejecutar la función de la búsqueda depués de 5 segundos
        search_exp();
        hideLoader();//ocultar carga después de la búsqueda
    }, 2000); //5000 milisegundos equivale a 2 segundos
}

//muestra el spinner
function showLoader(){
    document.getElementById('loader').style.display = 'block'; //mostrar

}

//esconde el spinner
function hideLoader(){
    document.getElementById('loader').style.display = 'none'; //esconder
}


//función para buscar la experiencia en función de su título
function search_exp(){
    let input = document.getElementById('search_bar').value.toLowerCase(); //obtiene el valor y lo pone a minúsculas
    let places = document.querySelectorAll('.row >h2');
    //selecciona todos los elementos h2 que son descendientes de row

    var n = 0; //inicializar nueva variable
    for (var i = 0; i<places.length; i++){
        if (places[i].innerHTML.toLowerCase().includes(input)){ //si el elemento coincide con lo que se ha escrito
            places[i].parentElement.style.display = 'block'; // se muestra

        }else{
            n++;
            places[i].parentElement.style.display = 'none'; //sino no se muestra

        }
    }

    if (n === places.length){ // si no coincide ninguno, muestra una alerta
        alert("No hay lugares con ese nombre aún");
    }

};


//SCRIPT PARA EL BOTÓN DEL FORMULARIO
function redireccion(){
    window.location.href="formulario.html";
}


//SCRIPT PARA EL BOTÓN DE ENVIAR
function enviarFormulario(){
    alert('¡Resultado enviado al correo!')
}