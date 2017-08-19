// JavaScript source code
/*var obj = {};
obj.a = 1;
obj.b = 'Ala ma kota';
obj.func = function () {
    alert('Func');
}

function createObject(a, b) { 
    var obj = {}; 
    obj.a = a; 
    obj.b = b; 
    obj.func = function()
    {
        alert('this.b');
    }
    return obj;
} 
var MyObj = createObject(1, 'Ala ma kota');



function MyObject() {}
MyObject.prototype.sayHi = function ()
{
    alert("Witaj  œwiecie");
};
var oMyObj = new MyObject();
oMyObj.sayHi()

*/

// w tej sposób definiujemy klase 
function StworzOsobe(imie, nazwisko, wiek, zawod) {

    if (zawod == 'Strazak')
    {
        x = new Strazak();
        x.Imie = imie;
        x.Nazwisko = nazwisko;
        return x;
    }
    else 
    {
    x = new Person();
    x.Imie = imie;
    x.Nazwisko = nazwisko;
    x.Wiek = wiek;
    return x;
    }

    var ktos = StworzOsobe('Janek', 'Kowalski', 45, 'Strazak');
    var ktos2 = StworzOsobe('Marek', 'Nowakowski', 30, 'policjant');


function Person(imie, nazwisko, wiek) {
    this.Imie = imie;
    this.Nazwisko = nazwisko;
    this.Wiek = wiek; 
}

Person.prototype.Imie = 'unknown';
Person.prototype.Nazwisko = 'unknown';
Person.prototype.wiek = 0;
Person.prototype.PodajWiek = function () { return this.Wiek; } 

// w ten sposób definiujemy nowy obiekt dla klasy 
var x = new Person('Zenek', 'Martyniuk', 45);
x.Imie;
x.Nazwisko;
x.PodajWiek();


