/*
console es un objeto y log es un metodo del objeto que recibe un string como parametro
*/

console.log("Hello Wolrd");

/*
$ es una funcion que hicieron los de jquery, en este caso recibe por parametro otra funcion, 
cuando se pasa una funcion por parametros se le dice callback
https://www.w3schools.com/Jquery/jquery_ref_selectors.asp
*/

$(function() {
    console.log( "document ready!" );
    $("#detallemenu").hide();
    $("#botonmenu").click(function(){
        $("#detallemenu").show();
        /*
        if es un condicional recibe como parametro un dato boolean
        */
        
        if(  $('#content').is(':hidden')   ){
            $('#content').show();
        }else{
            $('#content').hide();
        }
        
        console.log("vamos quimy que arrancamos fuerte!");
        console.log("acordate de experimentar!");
        
    });

});




