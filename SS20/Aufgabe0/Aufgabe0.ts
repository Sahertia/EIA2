/* Aufgabe: Aufgabe 0
Name: Rouven Sahertian  
Matrikel: 259665
Datum: 07.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Aufgabe0 {
        
    function main() {
        var i:string = prompt("Wie heisst du?");
        var text : string = "Hallo ";
        text += i;
        text += ", freut mich, dass du hier bist.";

        document.getElementById("content").innerHTML += text;
        console.log("Hallo ",i,", freut mich, dass du hier bist.");
        }

    
    document.addEventListener('DOMContentLoaded',main);
}