interface Person {
    name: string,
    age: number
}
class App {
    private people: Person[];
    private myForm: HTMLFormElement;
    private btnPrint: HTMLButtonElement;
    private nameField: HTMLInputElement;
    private ageField: HTMLInputElement;

    constructor() {
        this.people = [];
        this.myForm = <HTMLFormElement>document.querySelector('form');
        this.btnPrint = <HTMLButtonElement>document.getElementById("btnPrint");
        this.nameField = <HTMLInputElement>document.getElementById("name");
        this.ageField = <HTMLInputElement>document.getElementById("age");
    }
    public run(): void {
        console.log(this.myForm);
        this.myForm &&
            this.myForm.addEventListener('submit', (e) => {
                this.addPerson();
                e.preventDefault()
            });
        this.btnPrint &&
            this.btnPrint.addEventListener('click', (e) => {
                this.printPeople();
                e.preventDefault();
            });

    }
    public addPerson(): void {
        if (this.validateForm()) {
            this.people.push(
                {
                    name: this.nameField.value,
                    age: +this.ageField.value
                }
            )
            this.ageField.value = "";
            this.nameField.value = "";
        }else{
            alert("Error validando");
        }
    }
    public printPeople(): void {
        console.log(this.people);
    }
    private validateForm(): boolean {
        let result = true;

        if (this.nameField.value === "" || this.nameField.value === "")
            result = false;
        let age = +this.ageField.value;
        if (age < 0 || age > 120)
            result = false;

        return result;
    }
}

//document.addEventListener("DOMContentLoaded", function() {
  let app: App = new App();
  app.run();
//});