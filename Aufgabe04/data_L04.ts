namespace L04_Haushaltshilfe {
    console.log("startdata");

    export interface Category {
        name: string; //name of input
        items: string[]; //article, unit, price

    }

    export interface Data {
        [category: string]: Category[]; //category=fieldset
    }

    export let data: Data = {

        fieldsets: [
             { name: "Tasks", items: ["Einkauf"] },
             { name: "Tasks", items: ["Haushalt"] },
             { name: "Tasks", items: ["Bankange"] }
         ],

        fieldeinkauf: [
            { name: "Groceries", items: ["Butter", "Stück", "1.0"] },
            { name: "Groceries", items: ["Wasser", "Liter", "1.5"] },
            { name: "Groceries", items: ["Noodlez", "Kg", " 0.9"] },
            { name: "Groceries", items: ["Brot", "Stück", "1.3"] },

            { name: "Amount", items: ["amountarticle"] },

            { name: "Store", items: ["Edeka"] },
            { name: "Store", items: ["Lidl"] },
            { name: "Store", items: ["Aldi"] }
        ],

        fieldhaus: [
            { name: "Householdhelp", items: ["Staubsaugen", "Zimmer", "2.0"] },
            { name: "Householdhelp", items: ["Wischen", "Zimmer", "2.5"] },
            { name: "Householdhelp", items: ["Wäsche", "Maschinen", "3.0"] },

            { name: "Amount", items: ["amounthousehold"] }

        ],

        fieldbank: [
            { name: "Bank", items: ["GeldÜberweisen", "Euro", "10.0"] },
            { name: "Bank", items: ["GeldAbheben", "Euro", "5.0"] },
            
            { name: "Amount", items: ["amountmon"] }


        ]
    };

}