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

        Ingredients: [
            { name: "Spinnenbeine", price: 20, inputType: "checkBox" },
            { name: "Krötenaugen", price: 30, inputType: "checkBox" },
            { name: "Glibberwürmer", price: 40, inputType: "checkBox" },
            { name: "Schlangengift", price: 50, inputType: "checkBox" }
            { name: "Fledermausflügel", price: 75, inputType: "checkBox" }

        ]
    };
}

