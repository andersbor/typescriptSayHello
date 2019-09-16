let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("inputField");
let buttonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
buttonElement.addEventListener("click", sayHello);

function sayHello(): void {
    let name: string = inputElement.value;
    let outputField: HTMLDivElement = <HTMLDivElement>document.getElementById("outputField");
    outputField.innerHTML = "Hello " + name;
}