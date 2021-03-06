"use strict";
// Aufgabe: 04
// Name: Rouven Sahertian
// Matrikel: 259665
// Datum: 02.12.2020
// Hiermit versichere ich, dass ich diesen
// Code selbst geschrieben habe. Er wurde
// nicht kopiert und auch nicht diktiert. 
var Hexenkessel;
(function (Hexenkessel) {
    document.addEventListener("DOMContentLoaded", init);
    // eventListener to change after <input>
    // document.addEventListener("input", handleChange);
    // create Fieldsets in div.id == "Dynamics"
    function init() {
        for (let category in Hexenkessel.totalIngredientList) {
            let singleIngredient = Hexenkessel.totalIngredientList[category];
            let parentFieldset = createFieldset(document.getElementById("Dynamics"), category);
            for (let i = 0; i < singleIngredient.length; i++) {
                createInput(parentFieldset, singleIngredient[i], category);
            }
            function createFieldset(_parent, _ingredient) {
                //create fieldset & legend
                let fieldset = document.createElement("fieldset");
                let legend = document.createElement("legend");
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
            function createInput(_parent, _singleIngredient, _ingredientType) {
                let label;
                let input = document.createElement("input");
                input.type = _singleIngredient.inputType;
                input.id = _singleIngredient.inputType + "_" + _singleIngredient.name;
                // let label: HTMLElement;
                if (_singleIngredient.inputType == "number") {
                    input.min = "0";
                    input.max = "20";
                    input.step = "1";
                    label = document.createElement("label");
                }
                else {
                    input.value = _singleIngredient.name;
                    input.name = _singleIngredient.inputType + "Group_" + _ingredientType;
                    label = document.createElement("label");
                }
                label.setAttribute("for", input.id);
                label.innerHTML = _singleIngredient.name;
                // Attribute, die zur Darstellung des Warenkobs benötigt werden
                input.setAttribute("sorte", _singleIngredient.name);
                input.setAttribute("produkt", _ingredientType);
                input.setAttribute("preis", _singleIngredient.price.toString());
                // "show" Attribut zur darstellung des Warenkorbs >> wird in "true" geändert, wenn input element ausgewählt wurde
                input.setAttribute("show", "false");
                //append stepper to fieldset
                _parent.appendChild(input);
                _parent.appendChild(label);
            }
        }
    }
})(Hexenkessel || (Hexenkessel = {}));
//# sourceMappingURL=generateContent.js.map