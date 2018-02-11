/*global $ */

// Główne zmienne
var tura = 0;

// Maszyna osobowa
function Osoba(imie) {
    this.imie = imie,
    this.zdrowie = {
        zycie: 50,
        bolglowy: 20,
        pragnienie: 20,
        glod: 40,
        alkohol: 100,
        nikotyna: 35,
        zmeczenie: 60,
        sennosc: 60,
        sikanie: 75,
        sranie: 75,
        rzyganie: 100,
        seks: 100,
        czystoscismrod: 30,
        zawrotyglowy: 80,
        humor: 60
    }
    // Aktualizuje zdrowie zgodnie z upływem czasu
    this.aktualizujZdrowie = function() {
        this.zdrowie.bolglowy -= 3,
        this.zdrowie.pragnienie -= 3,
        this.zdrowie.glod -= 3,
        this.zdrowie.nikotyna -= 3,
        this.zdrowie.alkohol -= 1,
        this.zdrowie.zmeczenie -= 1,
        this.zdrowie.sennosc -= 1,
        this.zdrowie.sikanie -= 1,
        this.zdrowie.sranie -= 1,
        this.zdrowie.seks -= 1,
        this.zdrowie.czystoscismrod -= 2,
        this.zdrowie.humor -= 2,
        // SPRYTNIEJ byłoby zrobić tak, że funkcja
        // for each odejmuje randomową wartość
        // i upływ tur wyznacza zakres losowości
        // TAK TRZEBA ZROBIĆ 
        // Tutaj musi wejść mechanizm wzajemnych zależności...
        this.podajZdrowie();
    }
    this.podajZdrowie = function() {
        console.log("Osoba: " + this.imie);
        for (property in this.zdrowie) {
            console.log(property + ": " + this.zdrowie[property]);
        }
    }
}
var jacek = new Osoba("Jacek");