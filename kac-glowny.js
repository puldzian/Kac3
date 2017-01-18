/*jslint node: true*/
/*jslint browser: true*/
/*jslint white: true*/
/*global $ */
"use strict";

// Główne zmienne
var krok = 1;

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
    zoladek: 20     // zawartosc brzucha, wzmaga glod
    };

var podliczZdrowie = function () {

};

// Pętla główna
var petlaGlowna = function() {
    // podlicz decyzję
    // podlicz zdrowie
//  podliczZdrowie();
    // podlicz scenę i zegar

    // przedstaw wynik decyzji
    // przedstaw scenę, zegar
    // przedstaw zdrowie
    // przedstaw decyzje

    krok = krok + 1;
};
