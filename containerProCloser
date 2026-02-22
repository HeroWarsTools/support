// ==UserScript==
// @name         Container Pro Auto-Closer
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Chiude la scheda quando il titolo diventa CLOSE_NOW1
// @author       HeroWarsTools
// @match        file:///*
// @match        https://github.com/HeroWarsTools/support/*
// @match        https://raw.githubusercontent.com/HeroWarsTools/support/*
// @match        https://htmlpreview.github.io/*
// @grant        window.close
// ==/UserScript==

(function() {
    'use strict';

    // Controllo ogni secondo se il titolo è cambiato
    setInterval(function() {
        if (document.title === "CLOSE_NOW1") {
            console.log("Trigger rilevato: CLOSE_NOW1. Tentativo di chiusura...");
            
            // Tenta la chiusura standard
            window.close();
            
            // Fallback per alcuni browser/configurazioni
            self.close();
        }
    }, 1000);
})();
