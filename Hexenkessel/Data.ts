// Aufgabe: 05
// Name: Annsophie Rösch
// Matrikel: 257727
// Datum: 28.04.2019
// Hiermit versichere ich, dass ich diesen
// Code selbst geschrieben habe. Er wurde
// nicht kopiert und auch nicht diktiert. 


namespace Hexenkessel {

    export interface Ingredient {
        name: string;
        price: number;
        inputType: string;
    }

    export interface IngredientList {
        [category: string]: Ingredient[];
    }

    export let totalIngredientList: IngredientList = {


        "Potion Name": [
            { name: "", price: 1, inputType: "input"}
            
        ],

        "Description": [
            { name: "", price: 1, inputType: "textarea"}
            
        ],

        "Effects": [
            { name: "", price: 1, inputType: "select"}
            
        ],

        "Ingredients": [
            { name: "Spinnenbeine", price: 20, inputType: "number"},
            { name: "Krötenaugen", price: 30, inputType: "number"},
            { name: "Glibberwürmer", price: 40, inputType: "number"},
            { name: "Schlangengift", price: 50, inputType: "number"},
            { name: "Fledermausflügel", price: 75, inputType: "number"},
            { name: "bitumen", price: 75, inputType: "number"}

        ]
    
    };
}

