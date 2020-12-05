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
                createInput(parentFieldset, singleIngredient[i], category);
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



            function createInput(_parent: HTMLFieldSetElement, _singleIngredient: Ingredient, _ingredientType: string): void {

                let label: HTMLElement;
                let input: HTMLInputElement = document.createElement("input");
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

                if (_singleIngredient.inputType == "select") {
                    input.min = "0";
                    input.max = "20";
                    input.step = "1";
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

            // function createInput(_parent: HTMLFieldSetElement, _singleIngredient: Ingredient, _produktArt: string): void {

            //     let label: HTMLElement = document.createElement("label");
            //     let input: HTMLInputElement = document.createElement("input");
            //     input.type = _singleIngredient.inputType;
            //     input.id = _singleIngredient.inputType + "_" + _singleIngredient.name;

            //     // let label: HTMLElement;

            //     if (_singleIngredient.inputType == "number") {
            //         label = document.createElement("label");
            //         input.min = "0";
            //         input.max = "20";
            //         input.step = "1";
            //     }

            //     else {
            //         input.value = _singleIngredient.name;
            //         input.name = _singleIngredient.inputType + "Group_" + _produktArt;
            //         label = document.createElement("label");
            //     }

            //     label.setAttribute("for", input.id);
            //     label.innerHTML = _singleIngredient.name;

            //     // Attribute, die zur Darstellung des Warenkobs benötigt werden
            //     input.setAttribute("sorte", _singleIngredient.name);
            //     input.setAttribute("produkt", _produktArt);
            //     input.setAttribute("preis", _singleIngredient.price.toString());

            //     // "show" Attribut zur darstellung des Warenkorbs >> wird in "true" geändert, wenn input element ausgewählt wurde
            //     input.setAttribute("show", "false");

            //     //append stepper to fieldset
            //     _parent.appendChild(input);
            //     _parent.appendChild(label);
            // }
            // function inputErstellen(_parent: HTMLFieldSetElement, _produktEinzeln: Produkt, _produktArt: string): void {

            //     let input: HTMLInputElement = document.createElement("input");
            //     input.type = _produktEinzeln.inputType;
            //     input.id = _produktEinzeln.inputType + "_" + _produktEinzeln.name;

            //     let label: HTMLElement;

            //     if (_produktEinzeln.inputType == "number") {
            //         input.min = "0";
            //         input.max = "20";
            //         input.step = "1";
            //         label = document.createElement("p");
            //     }

            //     else {

            //         input.value = _produktEinzeln.name;
            //         input.name = _produktEinzeln.inputType + "Group_" + _produktArt;
            //         label = document.createElement("label");
            //     }

            //     label.setAttribute("for", input.id);
            //     label.innerHTML = _produktEinzeln.name;

            //     // Attribute, die zur Darstellung des Warenkobs benötigt werden
            //     input.setAttribute("sorte", _produktEinzeln.name);
            //     input.setAttribute("produkt", _produktArt);
            //     input.setAttribute("preis", _produktEinzeln.preis.toString());

            //     // "show" Attribut zur darstellung des Warenkorbs >> wird in "true" geändert, wenn input element ausgewählt wurde
            //     input.setAttribute("show", "false");

            //     //append stepper to fieldset
            //     _parent.appendChild(input);
            //     _parent.appendChild(label);
        }
    }
}

