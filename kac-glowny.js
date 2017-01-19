/*jslint node: true*/
/*jslint browser: true*/
/*jslint white: true*/
/*global $ */
"use strict";

// Główne zmienne
var krok = 1;

//
var fraza = {
    sila: [["Zaraz stracisz przytomność ze zmęczenia", "Zaraz stracisz przytomność ze zmęczenia"],
           ["Wkrótce stracisz przytomność ze zmęczenia", "Wkrótce stracisz przytomność ze zmęczenia"],
           ["Jesteś skrajnie wyczerpana", "Jesteś skrajnie wyczerpany"],
           ["Jesteś wyczerpana", "Jesteś wyczerpany"],
           ["Jesteś bardzo zmęczona", "Jesteś bardzo zmęczony"],
           ["Jesteś dość zmęczona", "Jesteś dość zmęczony"],
           ["Jesteś zmęczona", "Jesteś zmęczony"],
           ["Jesteś nieco zmęczona", "Jesteś nieco zmęczony"],
           ["Jesteś wypoczęta", "Jesteś wypoczęty"],
           ["Jesteś bardzo wypoczęta", "Jesteś wypoczęty"]]
    };

// Objekt gracza, czyli zbiór statystyk zdrowotnych
var osoba = {
    bolbrzucha: 50, // 0 - pękają jelita
    bolglowy: 40,   // 0 - głowa pęka
    flegma: 50,     // 0 - zaflegmienie pełne
    gazy: 0,        // 0 - ciągłe pierdzenie
    glod: 40,       // 0 - zdycha z głodu
    kaszel: 50,     // 0 - rozrywa się od kaszlu
    katar: 100,     // 0 - ciągle kapie z nosa
    kupa: 30,       // 0 - robi w majtki
    plec: 0,        // 0 - dziewczyna, 1 - chłopak, służy do wyboru słów
    powolnosc: 1.0, // Math.floor(), 1 - decyzja zajmuje jeden krok, przy 2 - dezycja zajmuje dwa kroki
    pragnienie: 20, // 0 - zdycha z pragnienia
    smrod: 30,      // 0 - śmierć ze smrodu
    siki: 70,       // 0 - sika w majtki
    sila: 40,       // 0 - pada ze zmęczenia, to będzie ważna zmienne, wpływająca na powolność
    smutek: 70,     // 0 - depresja
    temperatura: 36,// 0 - zamarza
    wymiot: 50,     // 0 - wymiotuje
    zdrowie: 50,    // główna statystyka, 0 - śmierć, 100 - wyjście z kaca
    zlosc: 70,      // 0 - wściekły
    zoladek: 20,     // zawartosc brzucha, wzmaga glod

    opisz: function (co) {
        var that = this,
            rzecz = co;
        if (osoba.rzecz > 0) {
            return fraza.rzecz[1][osoba.plec];
        }
    }
    };
    // Opisy poziomów kondycji; poziomy indeksu:
    // 0:1-3; 1:4-10; 2:11-15; 3:16-20; 4:21-25; 5:26-30; 6:31-35; 7:36-40; 8:80-90; 9:91+


// Współzależności między zmiennymi
var podliczKondycje = function () {

};

// Maszyna, która obsługuje switche
// 0:1-3; 1:4-10; 2:11-15; 3:16-20; 4:21-25; 5:26-30; 6:31-35; 7:36-40; 8:80-90; 9:91+
var pobierzOpis = function (slowo) {
    // KURWA PROBLEM
    // on traktuje "zmienna" jako klucz w osoba, a nie podkłada
    // Trzeba to ogarnąć przez metody osoby albo frazy, a nie zewnętrzne funkcje!!!
    if (osoba[slowo] > 0 && osoba[slowo] < 4) {
        return fraza[slowo][0][osoba.plec] + ". ";
    } else if (osoba[slowo] > 3 && osoba[slowo] < 11) {
        return fraza[slowo][1][osoba.plec] + ". ";
    } else if (osoba[slowo] > 10 && osoba[slowo] < 16) {
        return fraza[slowo][2][osoba.plec] + ". ";
    } else if (osoba[slowo] > 15 && osoba[slowo] < 21) {
        return fraza[slowo][3][osoba.plec] + ". ";
    } else if (osoba[slowo] > 20 && osoba[slowo] < 26) {
        return fraza[slowo][4][osoba.plec] + ". ";
    } else if (osoba[slowo] > 25 && osoba[slowo] < 31) {
        return fraza[slowo][5][osoba.plec] + ". ";
    } else if (osoba[slowo] > 30 && osoba[slowo] < 36) {
        return fraza[slowo][6][osoba.plec] + ". ";
    } else if (osoba[slowo] > 35 && osoba[slowo] < 41) {
        return fraza[slowo][7][osoba.plec] + ". ";
    } else if (osoba[slowo] > 80 && osoba[slowo] < 91) {
        return fraza[slowo][8][osoba.plec] + ". ";
    } else if (osoba[slowo] > 90) {
        return fraza[slowo][9][osoba.plec] + ". ";
    } else {
        return 0;
    }
};
























// Epitety kondycji
var opiszKondycje = function () {
};

// Pętla główna
var petlaGlowna = function() {
    // podlicz decyzję
    // podlicz kondycje
//  podliczKondycje();
    // podlicz scenę i zegar
    // wylosuj sytuacje losowe
//  PRZERYWNIK
    // przedstaw wynik decyzji
    // przedstaw scenę, zegar
    // wydarzenie losowe, sytuacja?
    // przedstaw kondycje
//  opiszKondycje();
    // przedstaw decyzje

    krok = krok + 1;
};
