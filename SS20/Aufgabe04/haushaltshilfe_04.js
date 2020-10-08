"use strict";
var L04_Haushaltshilfe;
(function (L04_Haushaltshilfe) {
    window.addEventListener("load", handleLoad);
    //let main: HTMLDivElement = <HTMLDivElement>document.querySelector("div#main");
    let totalcost = 0;
    function handleLoad(_event) {
        console.log("Start");
        L04_Haushaltshilfe.generateContent(L04_Haushaltshilfe.data); //function in generateContent.ts ; data aus Data.ts
        // let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        //tasks id
        let einkauf = document.querySelector("#Einkauf");
        let haushalt = document.querySelector("#Haushalt");
        let bankange = document.querySelector("#Bankange");
        //fieldsets
        let fieldeinkauf = document.querySelector("#fieldeinkauf");
        let fieldhaus = document.querySelector("#fieldhaus");
        let fieldbank = document.querySelector("#fieldbank");
        //  form.addEventListener("change", handleChange);
        let geteinkauf = document.querySelector("#buttoneinkauf");
        let gethaushalt = document.querySelector("#buttonhausarbeiten");
        let getbank = document.querySelector("#buttonbankange");
        //addEventlistener on radio buttons um die einzelnen fieldsets zeigen zu können
        //form.addEventListener("click", handleChange);
        einkauf.addEventListener("click", showfieldset);
        haushalt.addEventListener("click", showfieldset);
        bankange.addEventListener("click", showfieldset);
        //addEventlistener on okbuttons 
        geteinkauf.addEventListener("click", handleChange);
        gethaushalt.addEventListener("click", handleChange);
        getbank.addEventListener("click", handleChange);
        //disable fieldsets die gerade nicht benutzt werden
        function showfieldset() {
            if (einkauf.checked == true) {
                fieldeinkauf.disabled = false;
                fieldhaus.disabled = true;
                fieldbank.disabled = true;
                console.log("enable fieldset Einkauf");
            }
            else if (haushalt.checked == true) {
                fieldeinkauf.disabled = true;
                fieldhaus.disabled = false;
                fieldbank.disabled = true;
                console.log("enable fieldset Haushalt");
            }
            else if (bankange.checked == true) {
                fieldeinkauf.disabled = true;
                fieldhaus.disabled = true;
                fieldbank.disabled = false;
                console.log("enable fieldset Bankangelegenheiten");
            }
        }
    }
    function handleChange() {
        let diveinkauf = document.querySelector("#diveinkauf");
        let divhaushalt = document.querySelector("#divhaushalt");
        let divbank = document.querySelector("#divbank");
        let gesamt = document.querySelector("#gesamt");
        let formData = new FormData(document.forms[0]);
        console.log("formData:", formData);
        /*Mit dem for...of statement können sogenannte iterable objects durchlaufen werden
        (Array, Map, Set, das arguments Objekt und weitere eingeschlossen),
        wobei auf jeden gefundenen Wert eigene Statements ausgeführt werden können.
        entry: variable
        Bei jedem Durchlauf wird entry der jeweils gefundene Wert zugewiesen.
        formData: iterable
        Objekt, dessen aufzählbare Eigenschaften durchlaufen werden.
        
        for...in --> auf jeden gefundenen name*/
        for (let entry of formData) {
            let item = document.querySelector("[value='" + entry[1] + "']");
            console.log("Hello, you there?");
            console.log("entry:", entry);
            console.log("entry[0]:", entry[0]);
            console.log("entry[1]:", entry[1]);
            //hier if else, um zu prüfen, ob item gefunden wurde?
            /*  if ((typeof (item) == undefined) && (item == null)) {
                  continue;
              // tslint:disable-next-line: align
              } else (item !== null); {*/
            let price = Number(item.getAttribute("price"));
            let amount = Number(formData.get("Amount"));
            console.log(item);
            console.log("Item: ", item.value);
            console.log("Price: ", price);
            console.log("Amount: ", amount);
            let prices;
            //erstellen von div und span elementen um bestellung anzuzeigen
            let span1 = document.createElement("span");
            let span2 = document.createElement("span");
            let span3 = document.createElement("span");
            let span4 = document.createElement("span");
            let span5 = document.createElement("span");
            let span6 = document.createElement("span");
            let orderorder = document.createElement("div");
            //erstellen von lösch-Button für Bestellung
            let deletebutton = document.createElement("button");
            deletebutton.type = "button";
            //switch case statt if else
            switch (entry[0]) {
                case "Groceries":
                    // let unit: string = String(formData.get("Unit"));
                    let gebühr = 0.3;
                    let store = String(formData.get("Store"));
                    let gebühreneinkauf = amount * gebühr; //Gebühren
                    //Berechnung von menge mit preis
                    prices = amount * price;
                    deletebutton.addEventListener("click", function () {
                        deleteanorder(prices, event, gesamt);
                    });
                    //Werte eintragen
                    span1.innerHTML = " " + amount;
                    span2.innerHTML = "" + entry[1];
                    //span3.innerHTML = " " + unit;
                    span4.innerHTML = " Laden: " + store;
                    span5.innerHTML = " Preis: " + prices + "€";
                    span6.innerHTML = " Gebühren: " + gebühreneinkauf.toFixed(2) + "€";
                    //Werte in HTML
                    diveinkauf.appendChild(orderorder);
                    orderorder.appendChild(deletebutton);
                    orderorder.appendChild(span1);
                    orderorder.appendChild(span2);
                    //orderorder.appendChild(span3);
                    orderorder.appendChild(span4);
                    orderorder.appendChild(span5);
                    orderorder.appendChild(span6);
                    prices += gebühreneinkauf;
                    totalcost += prices;
                    break;
                case "Householdhelp":
                    prices = price * amount;
                    span1.innerHTML = " " + entry[1] + ":";
                    span2.innerHTML = " in " + amount + " Zimmer/n";
                    span3.innerHTML = " Preis: " + prices + "€";
                    console.log(item);
                    deletebutton.addEventListener("click", function () {
                        deleteanorder(prices, event, gesamt);
                    });
                    divhaushalt.appendChild(orderorder);
                    orderorder.appendChild(deletebutton);
                    orderorder.appendChild(span1);
                    orderorder.appendChild(span2);
                    orderorder.appendChild(span3);
                    totalcost += prices;
                    break;
                case "Bank":
                    let transfermon = document.querySelector("#GeldÜberweisen");
                    let getmon = document.querySelector("#GeldAbheben");
                    console.log("Bankstart");
                    if (transfermon.checked == true) {
                        prices = amount + price; //amount ist hier das zu überweisende Geld und price die gebühren
                        span1.innerHTML = " Geld überweisen: ";
                        span2.innerHTML = "" + amount + "€";
                        span3.innerHTML = " Gebühren: " + price + "€";
                        deletebutton.addEventListener("click", function () {
                            deleteanorder(prices, event, gesamt);
                        });
                        divbank.appendChild(orderorder);
                        orderorder.appendChild(deletebutton);
                        orderorder.appendChild(span1);
                        orderorder.appendChild(span2);
                        orderorder.appendChild(span3);
                        totalcost += prices;
                    }
                    else if (getmon.checked == true) {
                        span1.innerHTML = "Geld abheben: " + amount + "€";
                        span2.innerHTML = " Gebühren: " + price + "€";
                        deletebutton.addEventListener("click", function () {
                            deleteanorder(price, event, gesamt);
                        });
                        divbank.appendChild(orderorder);
                        orderorder.appendChild(deletebutton);
                        orderorder.appendChild(span1);
                        orderorder.appendChild(span2);
                        totalcost += price;
                    }
                    break;
                default:
                    break;
            }
            console.log(gesamt);
            console.log(totalcost);
            gesamt.innerHTML = totalcost.toFixed(2);
        }
        function deleteanorder(_prices, _event, _gesamt) {
            totalcost -= _prices;
            _gesamt.innerHTML = "" + totalcost.toFixed(2);
            console.log(totalcost);
            let deletespan = _event.target;
            let getparentdiv = deletespan.parentNode;
            let getgrandparentdiv = getparentdiv.parentNode;
            getgrandparentdiv.removeChild(getparentdiv);
        }
    }
})(L04_Haushaltshilfe || (L04_Haushaltshilfe = {}));
//# sourceMappingURL=haushaltshilfe_04.js.map