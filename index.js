/*
console es un objeto y log es un metodo del objeto que recibe un string como parametro
*/

console.log("Hello Wolrd");

/*
$ es una funcion que hicieron los de jquery, en este caso recibe por parametro otra funcion, 
cuando se pasa una funcion por parametros se le dice callback
https://www.w3schools.com/Jquery/jquery_ref_selectors.asp
*/
document.addEventListener("DOMContentLoaded", function(event) {
    
    console.log( "document ready!" );
    
    var detallemenu = document.querySelector("#detallemenu");
    
    console.log("detallemenu"); 
    console.log(detallemenu);
    
    detallemenu.style.display = 'none';
    
    
    document.addEventListener("click", function(event) {
        
        /*
        if es un condicional recibe como parametro un dato boolean
        */
       
        if (detallemenu.style.display == 'none'){
            detallemenu.style.display = 'block';
        
        }else{
            detallemenu.style.display = 'none';
        }
        
        console.log("vamos quimy que arrancamos fuerte!");
        console.log("acordate de experimentar!");
        
    });
    
});





