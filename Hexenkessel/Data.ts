namespace Hexenkessel {

    export interface Item {
        name: string;
        price: number;
    }

    export interface Data {
        [category: string]: Item[];
    }

    export let data: Data = {
        // Wirkung: [
        //     { name: "Unbekannt", price: 0.00 },
        //     { name: "Heiltrank", price: 0.00 },
        //     { name: "Liebestrank", price: 0.00 },
        //     { name: "Stärkungstrank", price: 0.00 },
        //     { name: "Beruhigungstrank", price: 0.00 }
        // ],
        Ingredients: [
            { name: "Spinnenbeine", price: 20 },
            { name: "Krötenaugen", price: 30 },
            { name: "Glibberwürmer", price: 40 },
            { name: "Schlangengift", price: 50 }
            { name: "Fledermausflügel", price: 75 }

        ]
    };
}

