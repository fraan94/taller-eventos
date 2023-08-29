//const container = document.querySelector("div");
//const button = document.querySelector("button")

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("button").addEventListener("click",function(event){
        event.stopPropagation();
        alert("Hola!")})
    document.querySelector("div").addEventListener("click",function(){
        alert("Hola soy el div!")})
        })