namespace A03_Homehelper {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Start");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div");

        form.addEventListener("change", handleChange);
    }

    function handleChange(_event: Event): void {
        console.log(_event);
        // let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        // console.log(drink.value);

        //let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        // console.log(inputs);

        
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        //let formData: FormData = new FormData(document.forms[0]);
        //for (let entry of formData) {
        //let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + "']");
        //let price: number = Number(item.getAttribute("price"));
        //order.innerHTML += item.name + "  € " + price;
    }
}

//}