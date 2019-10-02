"use strict";
var App = /** @class */ (function () {
    function App() {
        this.people = [];
        this.myForm = document.querySelector('form');
        this.btnPrint = document.getElementById("btnPrint");
        this.nameField = document.getElementById("name");
        this.ageField = document.getElementById("age");
    }
    App.prototype.run = function () {
        var _this = this;
        console.log(this.myForm);
        this.myForm &&
            this.myForm.addEventListener('submit', function (e) {
                _this.addPerson();
                e.preventDefault();
            });
        this.btnPrint &&
            this.btnPrint.addEventListener('click', function (e) {
                _this.printPeople();
                e.preventDefault();
            });
    };
    App.prototype.addPerson = function () {
        if (this.validateForm()) {
            this.people.push({
                name: this.nameField.value,
                age: +this.ageField.value
            });
            this.ageField.value = "";
            this.nameField.value = "";
        }
        else {
            alert("Error validando");
        }
    };
    App.prototype.printPeople = function () {
        console.log(this.people);
    };
    App.prototype.validateForm = function () {
        var result = true;
        if (this.nameField.value === "" || this.nameField.value === "")
            result = false;
        var age = +this.ageField.value;
        if (age < 0 || age > 120)
            result = false;
        return result;
    };
    return App;
}());
var app = new App();
app.run();
