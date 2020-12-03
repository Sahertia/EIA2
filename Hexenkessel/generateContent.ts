// Aufgabe: 04
// Name: Rouven Sahertian
// Matrikel: 259665
// Datum: 02.12.2020
// Hiermit versichere ich, dass ich diesen
// Code selbst geschrieben habe. Er wurde
// nicht kopiert und auch nicht diktiert. 

namespace Hexenkessel {

    document.addEventListener("DOMContentLoaded", init);
    // eventListener to change after <input>
    // document.addEventListener("input", handleChange);

    // create Fieldsets in div.id == "Dynamics"
    function init(): void {

        for (let category in totalIngredientList) {

            let singleIngredient: Ingredient[] = totalIngredientList[category];
            let parentFieldset: HTMLFieldSetElement = createFieldset(<HTMLDivElement>document.getElementById("Dynamics"), category);

            for (let i: number = 0; i < singleIngredient.length; i++) {
                createInput (parentFieldset, singleIngredient[i], category);
            }

            function createFieldset(_parent: HTMLDivElement, _ingredient: string): HTMLFieldSetElement {
                //create fieldset & legend
                let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
                let legend: HTMLLegendElement = document.createElement("legend");

                //give fieldset an id and set an Attribute
                fieldset.id = "fieldset_" + _ingredient;
                fieldset.setAttribute("location", "Dynamics");

                //give legend a innerText
                legend.innerText = _ingredient;

                //append legend to fieldset && fieldset to _parent
                fieldset.appendChild(legend);
                _parent.appendChild(fieldset);

                //returns <fieldset>
                return fieldset;
            }














        }